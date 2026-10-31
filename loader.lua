if _G.VzNamHubLoaded then return end
_G.VzNamHubLoaded = true

-- Dán cái link RAW ở Bước 1 vào giữa 2 dấu ngoặc kép dưới đây:
local rawLink = "https://gist.githubusercontent.com/lenguyenvietnam0-stack/0c272be5cb251972421834fc28ffddb3/raw/2b702094cfacbb783fc88039011b5ba8d7c42717/Core.lua"

loadstring(game:HttpGet(rawLink))()
