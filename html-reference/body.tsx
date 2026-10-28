import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="main-wedge__primary"
        style={{
          boxSizing: "border-box",
          content: '""',
          position: "absolute",
          left: "0px",
          top: "0px",
          zIndex: 99,
          width: "6.25rem",
          height: "100%",
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
}

body {
  box-sizing: border-box;
  margin: 0px;
  font-size: 1rem;
  line-height: 1.4;
  color: #364550;
  text-align: var(--bs-body-text-align);
  background-color: #fff;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: Gotham, "Gotham SSm A", "Gotham SSm B", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
}
`,
        }}
      />
    </>
  );
}
