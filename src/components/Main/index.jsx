import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import main from "./../../../public/main.png";
import wheel from "../../../public/pngwing.com-2.png";
import DIYPage from "../DIY/index";
import Header1 from "../Header copy/header";
import Footer1 from "../Footer copy 2/footer1";
import Cost from "../EstimateUsedCarPrice/EstimateUsedCarPrice"
import Footer2 from "../Footer copy/footer1"
import ProfilePage from "../ProfilePage/ProfilePage";

const Main = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    carMake: "",
    carModel: "",
    carYear: 0,
    milesDriven: 0,
    lastUpdateDate: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [maintenanceData, setMaintenanceData] = useState({
    maintenanceLevel: "",
    totalCost: 0,
  });
  const [currentView, setCurrentView] = useState("main");
  const [showEstimation, setShowEstimation] = useState(false);

  useEffect(() => {
    let updateMilesInterval;

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");

        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          const fetchedData = response.data;
          const lastUpdateDate = fetchedData.lastUpdateDate || new Date();

          setUserData({
            ...fetchedData,
            carYear: parseInt(fetchedData.carYear, 10) || 0,
            milesDriven: parseFloat(fetchedData.milesDriven) || 0,
            lastUpdateDate,
          });

          const { maintenanceLevel, totalCost } = calculateMaintenance(fetchedData.milesDriven);
          setMaintenanceData({ maintenanceLevel, totalCost });

          const daysSinceLastUpdate = calculateDaysSinceLastUpdate(lastUpdateDate);
          if (daysSinceLastUpdate > 0) {
            updateMilesForPastDays(fetchedData.milesDriven, daysSinceLastUpdate);
          }

          updateMilesInterval = startMilesUpdateInterval(fetchedData, daysSinceLastUpdate);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Failed to fetch user data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();

    return () => clearInterval(updateMilesInterval);
  }, []);

  const calculateDaysSinceLastUpdate = (lastUpdateDate) => {
    const currentDate = new Date();
    const lastUpdate = new Date(lastUpdateDate);
    const timeDifference = currentDate - lastUpdate;
    return Math.floor(timeDifference / (1000 * 3600 * 24));
  };

  const updateMilesForPastDays = (currentMiles, daysSinceLastUpdate) => {
    const carAgeInYears = Math.max(new Date().getFullYear() - (userData.carYear || 0), 1);
    const averageMilesPerDay = currentMiles / (365 * carAgeInYears) || 0;
    const totalMilesIncrease = averageMilesPerDay * daysSinceLastUpdate;

    const updatedMiles = currentMiles + totalMilesIncrease;
    setUserData((prevData) => ({
      ...prevData,
      milesDriven: updatedMiles.toFixed(2),
    }));

    const updatedMaintenanceData = calculateMaintenance(updatedMiles);
    setMaintenanceData(updatedMaintenanceData);

    updateMilesInDatabase(updatedMiles);
  };

  const startMilesUpdateInterval = (fetchedData, daysSinceLastUpdate) => {
    const carAgeInYears = Math.max(new Date().getFullYear() - (fetchedData.carYear || 0), 1);
    const averageMilesPerDay = fetchedData.milesDriven / (365 * carAgeInYears) || 0;

    return setInterval(() => {
      setUserData((prevData) => {
        const currentMiles = parseFloat(prevData.milesDriven) || 0;
        const updatedMiles = currentMiles + averageMilesPerDay;

        if (isNaN(updatedMiles) || !isFinite(updatedMiles)) {
          console.error("Invalid miles calculation:", { currentMiles, averageMilesPerDay });
          return prevData;
        }

        const updatedMaintenanceData = calculateMaintenance(updatedMiles);
        setMaintenanceData(updatedMaintenanceData);

        updateMilesInDatabase(updatedMiles);

        return {
          ...prevData,
          milesDriven: updatedMiles.toFixed(2),
        };
      });
    }, 3600000);
  };

  const calculateMaintenance = (milesDriven) => {
    let maintenanceLevel = "Low Maintenance";
    let totalCost = 0;

    if (milesDriven >= 5000 && milesDriven < 20000) {
      maintenanceLevel = "Moderate Maintenance";
      totalCost = 100;
    } else if (milesDriven >= 20000) {
      maintenanceLevel = "High Maintenance";
      totalCost = 300;
    }

    return { maintenanceLevel, totalCost };
  };

  const updateMilesInDatabase = async (updatedMiles) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/users/update-miles`,
        { milesDriven: updatedMiles },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error("Failed to update miles in the database:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handlePricingClick = () => {
    setShowEstimation(true);
    setCurrentView("estimation");
  };

  if (isLoading) {
    return (
      <div className={styles.loader_container}>
        <div className={styles.loader}>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.main_container}>
      <Header1 />

      {currentView === "main" && (
        <div className="main2">
          <button className={styles.white_btn1} onClick={handleLogout}>
            <i className="icon-exit"></i> Logout
          </button>

          <button className={styles.white_btn2} onClick={() => setCurrentView("main")}>
            Main
          </button>

          <button className={styles.white_btn3} onClick={() => setCurrentView("consultation")}>
            Consultation
          </button>

          <button className={styles.white_btn4} onClick={() => setCurrentView("diy")}>
            DIY & Maintainance Guide
          </button>

          <h1 className={styles.Welcome}>
            Welcome Back, {userData.firstName} {userData.lastName}!
          </h1>
          <img className={styles.main} src={main} alt="Main Background" />
          <div className="car_info">
            <div className={styles.info} id={styles.model}>
              <h3>Car Info</h3>
              <h4 className={styles.carinfo}>
                {userData.carMake} {userData.carModel} ({userData.carYear})
              </h4>
            </div>
            <div className={styles.info} id={styles.km}>
              <h3>Distance</h3>
              <h4 className={styles.miles}>{userData.milesDriven} Miles</h4>
            </div>
            <img src={wheel} className={styles.wheel} alt="Wheel" />
            <div className={styles.info} id={styles.maintain}>
              <h3>Maintenance Level</h3>
              <h4 className={styles.level}>{maintenanceData.maintenanceLevel}</h4>
            </div>
            <div className={styles.info} id={styles.costs}>
              <h3>Maintenance Costs</h3>
              <h4 className={styles.price}>€{maintenanceData.totalCost}</h4>
            </div>
            <button onClick={handlePricingClick} className={styles.pricing_button}>
              Pricing
            </button>
            <button 
              className={styles.white_btn3} 
              onClick={() => window.location.href = "https://carlytalk.onrender.com"}
            >
              Consultation
            </button>
          </div>
          <Footer1 />
        </div>
      )}

      {currentView === "estimation" && (
        <div className={styles.estimation_container}>
          <Cost/>
          <Footer1 />
          <button className={styles.white_btn1} onClick={handleLogout}>
            <i className="icon-exit"></i> Logout
          </button>

          <button className={styles.white_btn2} onClick={() => setCurrentView("main")}>
            Main
          </button>
          <button 
            className={styles.white_btn3} 
            onClick={() => window.location.href = "https://carlytalk.onrender.com"}
          >
            Consultation
          </button>

          <button className={styles.white_btn4} onClick={() => setCurrentView("diy")}>
            DIY & Maintainance Guide
          </button>
          <button onClick={handlePricingClick} className={styles.pricing_button}>
            Pricing
          </button>
        </div>
      )}

      {currentView === "diy" && (
        <div className={styles.diy_container}>
          <DIYPage />
          <button className={styles.white_btn1} onClick={handleLogout}>
            <i className="icon-exit"></i> Logout
          </button>

          <button className={styles.white_btn2} onClick={() => setCurrentView("main")}>
            Main
          </button>
          <button 
            className={styles.white_btn3} 
            onClick={() => window.location.href = "https://carlytalk.onrender.com"}
          >
            Consultation
          </button>

          <button className={styles.white_btn4} onClick={() => setCurrentView("diy")}>
            DIY & Maintainance Guide
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
