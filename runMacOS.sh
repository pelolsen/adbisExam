#!/bin/sh
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
PURPLE='\033[0;35m'
ORANGE='\033[0;33m'
NC='\033[0m'

echo "\n=========================================================="
echo "${YELLOW}Starting Server:${NC}"
echo "=========================================================="
node server.js &
sleep 2
echo "\n${GREEN}SERVER RUNNING: http://localhost:3000${NC}"
read -p "${YELLOW}Press any key to shut down${NC}"
echo "\n${RED}Shutting down${NC}"
sleep 2
kill $(lsof -t -i:3000)
