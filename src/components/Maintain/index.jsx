import React from "react";
import styles from "./MaintenanceGuidelines.module.css"; // Import the external CSS module for styles
import Footer from "../Footer copy/footer1";
const MaintenanceCard = ({ serviceName, tasks }) => {
  return (
    <>
      <div className={styles.maintenanceCard}>
        <details>
          <summary className={styles.maintenanceCardDetailsSummary}>
            {serviceName}
          </summary>
          <div className={styles.maintenanceCardDetailsDiv}>
            <ul className={styles.maintenanceCardUl}>
              {tasks.map((task, index) => (
                <li key={index} className={styles.maintenanceCardLi}>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </>
  );
};
const MaintenanceGuidelines = () => {
  const maintenanceServices = [
    {
      serviceName: "10,000 km Service",
      tasks: [
        "Check tire pressure",
        "Inspect lights and wipers",
        "Inspect steering and suspension",
        "Check for fluid leaks",
        "Check air conditioning system",
      ],
    },
    {
      serviceName: "30,000 km Service",
      tasks: [
        "Change engine oil",
        "Replace cabin air filter",
        "Inspect battery",
        "Check brake fluid level",
        "Check timing belt",
      ],
    },
    {
      serviceName: "50,000 km Service",
      tasks: [
        "Change engine oil",
        "Replace cabin air filter",
        "Inspect brake system",
        "Check tire alignment",
        "Inspect battery and terminals",
      ],
    },
    {
      serviceName: "100,000 km Service",
      tasks: [
        "Change engine oil",
        "Replace air filter",
        "Inspect brake pads",
        "Check tire tread depth",
        "Replace spark plugs",
      ],
    },
    {
      serviceName: "150,000 km Service",
      tasks: [
        "Inspect alternator",
        "Change transmission fluid",
        "Inspect fuel injectors",
        "Replace timing chain",
        "Inspect shock absorbers",
      ],
    },
    {
      serviceName: "200,000 km Service",
      tasks: [
        "Change engine oil",
        "Inspect fuel system",
        "Inspect timing belt",
        "Check exhaust system",
        "Check transmission fluid",
      ],
    },
    {
      serviceName: "300,000 km Service",
      tasks: [
        "Inspect engine timing",
        "Replace head gasket",
        "Replace spark plugs",
        "Flush cooling system",
        "Inspect power steering",
      ],
    },
    {
      serviceName: "Engine Overhaul Service",
      tasks: [
        "Replace engine seals",
        "Replace piston rings",
        "Inspect cylinder heads",
        "Recondition crankshaft",
        "Replace timing chains or belts",
      ],
    },
  ];
  return (
    <>
      <hr className={styles.line} width="20%" color="red" />
      <div className={styles.guidelineContainer}>
        <h2 className={styles.guidelineTitle}>
          Maintenance <span>Guidelines</span>{" "}
        </h2>

        <div className="container">
          <details>
            <summary>10,000 km Service</summary>
            <div>
              Check tire pressure <br />
              Inspect lights and wipers <br />
              Inspect steering and suspension <br />
              Check for fluid leaks <br />
              Check air conditioning system <br />
            </div>
          </details>
        </div>

        <div className="container">
          <details>
            <summary>30,000 km Service</summary>
            <div>
              Change engine oil <br />
              Replace cabin air filter <br />
              Inspect battery <br />
              Check brake fluid level <br />
              Check timing belt <br />
            </div>
          </details>
        </div>

        <div className="container">
          <details>
            <summary>50,000 km Service</summary>
            <div>
              Change engine oil <br />
              Replace cabin air filter <br />
              Inspect brake system <br />
              Check tire alignment <br />
              Inspect battery and terminals <br />
            </div>
          </details>
        </div>

        <div className="container">
          <details>
            <summary>100,000 km Service</summary>
            <div>
              Change engine oil <br />
              Replace air filter <br />
              Inspect brake pads <br />
              Check tire tread depth <br />
              Replace spark plugs <br />
            </div>
          </details>
        </div>

        <div className="container">
          <details>
            <summary>150,000 km Service</summary>
            <div>
              Inspect alternator <br />
              Change transmission fluid <br />
              Inspect fuel injectors <br />
              Replace timing chain <br />
              Inspect shock absorbers <br />
            </div>
          </details>
        </div>

        <div className="container">
          <details>
            <summary>200,000 km Service</summary>
            <div>
              Change engine oil <br />
              Inspect fuel system <br />
              Inspect timing belt <br />
              Check exhaust system <br />
              Check transmission fluid <br />
            </div>
          </details>
        </div>

        <div className="container">
          <details>
            <summary>300,000 km Service</summary>
            <div>
              Inspect engine timing <br />
              Replace head gasket <br />
              Replace spark plugs <br />
              Flush cooling system <br />
              Inspect power steering <br />
            </div>
          </details>
        </div>

        <div className="container8">
          <details>
            <summary>Engine Overhaul Service</summary>
            <div>
              Replace engine seals <br />
              Replace piston rings <br />
              Inspect cylinder heads <br />
              Recondition crankshaft <br />
              Replace timing chains or belts <br />
            </div>
          </details>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default MaintenanceGuidelines;
