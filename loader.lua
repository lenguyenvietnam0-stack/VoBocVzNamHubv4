if _G.VzNamHubLoaded then return end
_G.VzNamHubLoaded = true

-- Dán cái link RAW ở Bước 1 vào giữa 2 dấu ngoặc kép dưới đây:
local rawLink = "https://gist.githubusercontent.com/lenguyenvietnam0-stack/827bb76db4396df6ec8243b6a2ccf390/raw/a4ec635570928b5be8468b654d62026a4751808d/Core.lua"

loadstring(game:HttpGet(rawLink))()
