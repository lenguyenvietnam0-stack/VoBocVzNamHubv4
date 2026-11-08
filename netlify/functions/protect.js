exports.handler = async (event) => {
  const ua = (event.headers['user-agent'] || '').toLowerCase();
  
  // Chỉ chặn nếu là trình duyệt THẬT (không có chữ roblox hoặc delta)
  const isRobloxOrExecutor = ua.includes('roblox') || ua.includes('delta') || ua.includes('codex') || ua.includes('fluxus') || ua.includes('synapse');
  
  if (!isRobloxOrExecutor && (ua.includes('mozilla') || ua.includes('chrome') || ua.includes('safari'))) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Script is Protected</title><style>body{background-color:#0d0d0d;color:#fff;font-family:sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;text-align:center;}.box{background-color:#1a1a1a;padding:40px 20px;border-radius:16px;border:1px solid #333;max-width:400px;}.lock{width:70px;height:70px;background-color:#ff6600;border-radius:16px;display:flex;justify-content:center;align-items:center;margin:0 auto 20px auto;font-size:35px;}h1{font-size:22px;}p{color:#aaa;font-size:14px;}.code{background:#000;padding:12px;border-radius:8px;color:#ff6600;font-size:13px;margin-bottom:20px;border:1px solid #222;}</style></head><body><div class="box"><div class="lock">🔒</div><h1>Script is Protected</h1><p>You are not allowed to view the content of this script.</p><p>This content can only be executed via</p><div class="code">loadstring(game:HttpGet(...))()</div><p>in Roblox / supported executors.</p><p style="font-size:12px;color:#666;">Browsers are not permitted to view the source.</p></div></body></html>`
    };
  }

  // THAY LINK RAW GIST CỦA BẠN VÀO ĐÂY
  const githubRawLink = "https://gist.githubusercontent.com/lenguyenvietnam0-stack/4c0a1ed5824b32ea0160a22be5b48ec7/raw/d0ac4b78323fad34278147cf53cc33fd9e7a213d/vznamrbl.lua";
  
  try {
    const response = await fetch(githubRawLink);
    const luaCode = await response.text();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      body: luaCode
    };
  } catch (error) {
    return { statusCode: 500, body: "-- Loi tai code" };
  }
};
