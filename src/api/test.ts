import request from "@/utils/request";

export const getSomeData = request({ url: "/test", method: "GET" });
