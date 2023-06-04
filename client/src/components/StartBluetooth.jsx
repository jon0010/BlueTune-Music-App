import React, { useEffect, useState } from "react";

const MyBluetoothComponent = () => {
  const [device, setDevice] = useState(null);

  const handleRequestDevice = async () => {
    try {
      const device = await navigator.bluetooth
        .requestDevice({ acceptAllDevices: true })
        .then((device) => {
          // Human-readable name of the device.
          console.log(device.name);

          // Attempts to connect to remote GATT Server.
          return device.gatt.connect();
        })
        .then((server) => {
          /* … */
        })
        .catch((error) => {
          console.error(error);
        });
      // // Establecer el dispositivo conectado
      setDevice(device);
    } catch (error) {
      console.error("Error al conectar con el dispositivo Bluetooth:", error);
    }
  };

  return (
    <div>
      {device ? (
        <p className="text-white">Dispositivo conectado: {device.name}</p>
      ) : (
        <button onClick={() => handleRequestDevice()}>
          Conectar dispositivo Bluetooth
        </button>
      )}
    </div>
  );
};

export default MyBluetoothComponent;
