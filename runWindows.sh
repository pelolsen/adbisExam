
echo "=========================================================="
echo "[101;93m Starting Server: [0m"
echo "=========================================================="
node server.js &
sleep 2
echo "[32mSERVER RUNNING[0m"
read -p "[101;93m Press any key to shut down: [0m"
echo "[31mShutting down[0m"
pkill node
npx kill-port 3000