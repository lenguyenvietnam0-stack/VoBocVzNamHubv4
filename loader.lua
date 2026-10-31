if _G.VzNamHubLoaded then return end
_G.VzNamHubLoaded = true

-- Dán cái link RAW ở Bước 1 vào giữa 2 dấu ngoặc kép dưới đây:
local rawLink = "https://raw.githubusercontent.com/.../core.lua"

loadstring(game:HttpGet(rawLink))()
