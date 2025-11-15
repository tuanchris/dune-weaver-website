#!/bin/bash

# Script to download wiki images from GitHub
# Run this script after authenticating with GitHub

set -e

echo "Downloading Dune Weaver Pro Assembly images..."
cd public/images/docs/assembly

curl -L -o "01-ikea-leg.png" "https://private-user-images.githubusercontent.com/52090179/413574011-f8c8c7ad-ae7d-4f9d-9068-21b7ea13a796.png"
curl -L -o "02-base-aligner.png" "https://private-user-images.githubusercontent.com/52090179/418306981-545356af-cfdb-41e8-a560-68026f420120.png"
curl -L -o "03-base-aligner-detail.png" "https://private-user-images.githubusercontent.com/52090179/418306993-d47ec8d0-81f7-477d-91ab-a14728a90063.png"
curl -L -o "04-motor-installation.png" "https://private-user-images.githubusercontent.com/52090179/418307029-5d8ba3e8-9af6-4d10-a966-850a60148e24.png"
curl -L -o "05-outer-bearing-holder.png" "https://private-user-images.githubusercontent.com/52090179/435479160-c8bbcad4-1e62-49d2-a1cb-50b41d516e98.png"
curl -L -o "06-inner-bearing-angular-gear.png" "https://private-user-images.githubusercontent.com/52090179/435479282-16aa368f-0e6f-4513-9ee1-00dffb58f412.png"
curl -L -o "07-angular-gear-press-fit.png" "https://private-user-images.githubusercontent.com/52090179/435479365-a04a6eb0-dc0a-43da-aa18-ab2e7c3e16a9.png"
curl -L -o "08-assembly-to-base.png" "https://private-user-images.githubusercontent.com/52090179/435479439-e729626f-c351-4b7e-93c9-75bf8c0e50aa.png"
curl -L -o "09-radial-arm-spur-gear.png" "https://private-user-images.githubusercontent.com/52090179/435479484-21bfc4c9-c47c-473d-84d3-2552d7d0a6c7.png"
curl -L -o "10-pi-dlc32-installation.png" "https://private-user-images.githubusercontent.com/52090179/418307269-64c38b08-4a51-4c82-90f2-693026966c61.png"
curl -L -o "11-electronics-cover.png" "https://private-user-images.githubusercontent.com/52090179/435479547-93746c82-eaa0-4b40-94cd-cfe5cc83bfab.png"
curl -L -o "12-eva-foam.png" "https://private-user-images.githubusercontent.com/52090179/435701025-07df0be2-7f2d-40ff-9f4b-2b26ffb54284.png"
curl -L -o "13-led-wiring.png" "https://private-user-images.githubusercontent.com/52090179/435701795-480323c1-0def-4306-abdb-f44bb7b20141.png"
curl -L -o "14-enclosure-1.png" "https://private-user-images.githubusercontent.com/52090179/435701570-e5a75def-2658-4d25-9a23-6ecb6af12f9a.png"
curl -L -o "15-enclosure-2.png" "https://private-user-images.githubusercontent.com/52090179/435701627-c6350219-d969-490c-9e70-f98c872f2e81.png"
curl -L -o "16-enclosure-3.png" "https://private-user-images.githubusercontent.com/52090179/435701700-3cb00146-5c3f-4620-9a7c-565d4dc90d8d.png"
curl -L -o "17-caulking.jpeg" "https://private-user-images.githubusercontent.com/52090179/435702904-d222212c-386a-49a3-b203-dcc12af41857.jpeg"
curl -L -o "18-led-sand-installation.png" "https://private-user-images.githubusercontent.com/52090179/435704477-6ef59175-a351-4f1f-be8c-8dd637510733.png"
curl -L -o "19-glass-ring-1.png" "https://private-user-images.githubusercontent.com/52090179/435702408-8100716f-31ae-47d8-9166-26418c70dcdf.png"
curl -L -o "20-glass-ring-2.png" "https://private-user-images.githubusercontent.com/52090179/435702555-66017fd8-80eb-4e43-9ec0-c08af7163512.png"
curl -L -o "21-complete-table.png" "https://private-user-images.githubusercontent.com/52090179/435702241-5a8d648b-32f4-4a19-8cdc-b27947f5c820.png"
curl -L -o "22-wiring-diagram.png" "https://private-user-images.githubusercontent.com/52090179/503750946-1188396f-ad3c-48c4-9fba-2ddee426e36d.png"
curl -L -o "23-power-cable.jpeg" "https://private-user-images.githubusercontent.com/52090179/420631039-99adc955-2e15-48c7-9777-24906e2f9e8b.jpeg"
curl -L -o "24-led-connector.jpeg" "https://private-user-images.githubusercontent.com/52090179/420631062-71b1e2d3-2f55-4671-9b2e-ea05acb14535.jpeg"
curl -L -o "25-led-data-cable.jpeg" "https://private-user-images.githubusercontent.com/52090179/420631116-84ededdb-d60f-48a4-9343-027cbf334ed7.jpeg"

echo "Downloading Wiring images..."
cd ../wiring
curl -L -o "cnc-shield-tmc2209.png" "https://private-user-images.githubusercontent.com/52090179/406622258-baa45bd1-e2bd-46fc-ad0a-53d140512c04.png"
curl -L -o "tmc2209-wire-swap.png" "https://private-user-images.githubusercontent.com/52090179/413980835-528cb03c-d4e1-4dc0-9e55-01ad2b718892.png"
curl -L -o "cnc-shield-drv8825.png" "https://private-user-images.githubusercontent.com/52090179/406622388-3b84aed2-2616-4702-b6b8-33a7638ef742.png"
curl -L -o "esp32-wiring.png" "https://private-user-images.githubusercontent.com/52090179/406624678-69cd9f05-57aa-41ec-a056-90e478306aba.png"

echo "Downloading VREF image..."
cd ../vref
curl -L -o "vref-adjustment.png" "https://private-user-images.githubusercontent.com/52090179/504296329-3594e605-fbdf-4d5d-a692-7008298e918b.png"

echo "Downloading Performance images..."
cd ../performance
curl -L -o "baking-soda-surface.png" "https://private-user-images.githubusercontent.com/52090179/410058939-0fc106c2-9d50-427b-9a3a-ed98d8bb3b95.png"
curl -L -o "80-100-mesh-sand.png" "https://private-user-images.githubusercontent.com/52090179/410060428-f58357ea-5b55-471b-ba88-507d2cbf9350.png"
curl -L -o "ball-selection.png" "https://private-user-images.githubusercontent.com/52090179/410060778-53ec41a3-a129-4b93-8326-e605747a740b.png"
curl -L -o "ball-wiggling.jpeg" "https://private-user-images.githubusercontent.com/52090179/410976725-80535a73-4ee5-4a25-9b68-3729030487e6.jpeg"
curl -L -o "magnetic-ball-stability.jpeg" "https://private-user-images.githubusercontent.com/52090179/410977189-20b5ba46-e9b8-49b8-a8b0-7da315333caa.jpeg"
curl -L -o "ball-size-comparison.png" "https://private-user-images.githubusercontent.com/52090179/410062278-62a2b6ab-6706-443b-afa8-6ba46e877cb4.png"
curl -L -o "magnetic-ball-wear.png" "https://private-user-images.githubusercontent.com/52090179/410064413-a4b52207-1dc9-4877-83c6-d16df5a55352.png"
curl -L -o "foam-padded-ball.png" "https://private-user-images.githubusercontent.com/52090179/410064704-a3652375-e54d-439f-b468-2ab4677f4cc3.png"
curl -L -o "faux-leather.png" "https://private-user-images.githubusercontent.com/52090179/410063490-5961a02d-07e3-43c6-8d4a-600f502f44cf.png"

echo "Done! All images downloaded successfully."
