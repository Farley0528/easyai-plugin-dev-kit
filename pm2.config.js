export const apps = [
  {
    name: "easyai-plugins",
    script: "./.output/server/index.mjs",
    watch: false,
    ignore_watch: [".pm2", "node_modules", "logs"],
    exec_mode: "cluster", // 这一行开启集群模式
    instances: 4, // 自动根据CPU核心数启动对应数量的进程
    // env 块用于定义应用运行时要使用的环境变量
    env: {
      PORT: process.env.PORT || 3020, // 如果ENV中有PORT，就用ENV的，否则用3010
      NODE_ENV: process.env.NODE_ENV || "production", // 同理
    },
  },
];
