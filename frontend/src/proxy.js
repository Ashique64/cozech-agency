import { NextResponse } from "next/server";

export function proxy(request) {
    const host = request.headers.get("host") || "";
    const url = request.nextUrl.clone();

    // Force www canonical host
    if (host === "cozech.com") {
        url.hostname = "www.cozech.com";
        url.protocol = "https:";
        return NextResponse.redirect(url, 301);
    }

    // If protocol is http (behind a proxy), redirect to https
    // Skip if running on localhost
    if (url.protocol !== "https:" && !host.includes("localhost")) {
        url.protocol = "https:";
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/:path*",
};
