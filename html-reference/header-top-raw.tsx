import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="d-flex bg-white"
        style={{
          boxSizing: "border-box",
          display: "flex",
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
      >
        <div
          className="container-fluid px-0 px-lg-2"
          style={{
            boxSizing: "border-box",
            width: "100%",
            marginRight: "auto",
            marginLeft: "auto",
            paddingRight: "0.5rem",
            paddingLeft: "0.5rem",
          }}
        >
          <div
            className="row container-lg px-0 px-lg-2 mx-auto"
            style={{
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "1200px",
              display: "flex",
              flexWrap: "wrap",
              marginTop: "calc(-1*0)",
              marginRight: "auto",
              marginLeft: "auto",
              paddingRight: "0.5rem",
              paddingLeft: "0.5rem",
            }}
          >
            <div
              className="col-12 col-md-12 col-lg-2 px-3 px-lg-0"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "16.6667%",
                paddingRight: "0px",
                paddingLeft: "0px",
              }}
            >
              <div
                className="container px-0"
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  marginRight: "auto",
                  marginLeft: "auto",
                  maxWidth: "1200px",
                  paddingRight: "0px",
                  paddingLeft: "0px",
                }}
              >
                <div
                  className="row align-items-center"
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "calc(-1*0)",
                    marginRight: "calc(-0.5*1rem)",
                    marginLeft: "calc(-0.5*1rem)",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="col-5 col-lg-12 ps-0"
                    style={{
                      boxSizing: "border-box",
                      maxWidth: "100%",
                      paddingRight: "calc(1rem*.5)",
                      marginTop: "0",
                      flex: "0 0 auto",
                      flexShrink: 0,
                      width: "100%",
                      paddingLeft: "0px",
                    }}
                  >
                    <a
                      className="navbar-brand logo"
                      href="https://www.muellerinc.com/"
                      title="Mueller Building Solutions"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        paddingTop: "var(--bs-navbar-brand-padding-y)",
                        paddingBottom: "var(--bs-navbar-brand-padding-y)",
                        marginRight: "var(--bs-navbar-brand-margin-end)",
                        fontSize: "var(--bs-navbar-brand-font-size)",
                        color: "var(--bs-navbar-brand-color)",
                      }}
                    >
                      <div style={{ boxSizing: "border-box" }}>
                        <img
                          src="https://www.muellerinc.com/siteassets/logo/logo-1-mueller.svg"
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            padding: "8px",
                            maxWidth: "157px",
                          }}
                        />
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-7 d-lg-none"
                    style={{
                      boxSizing: "border-box",
                      maxWidth: "100%",
                      paddingRight: "calc(1rem*.5)",
                      paddingLeft: "calc(1rem*.5)",
                      marginTop: "0",
                      flex: "0 0 auto",
                      flexShrink: 0,
                      width: "58.3333%",
                      display: "none",
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-end"
                      style={{
                        boxSizing: "border-box",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <button
                        className="border-0 bg-white me-2"
                        style={{
                          boxSizing: "border-box",
                          borderRadius: "0px",
                          margin: "0px",
                          fontFamily: "inherit",
                          fontSize: "inherit",
                          lineHeight: "inherit",
                          textTransform: "none",
                          appearance: "button",
                          cursor: "pointer",
                          border: "0px",
                          marginRight: "0.5rem",
                          backgroundColor: "rgba(255, 255, 255, 1)",
                        }}
                      >
                        <img
                          className="mob-header-icon"
                          src="https://www.muellerinc.com/globalassets/global/icons/avatar.svg"
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            width: "40px",
                          }}
                        />
                      </button>
                      <span
                        className="position-relative"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          cursor: "pointer",
                          position: "relative",
                        }}
                      >
                        <a
                          className="border-0 bg-white"
                          aria-label="Cart"
                          href="https://www.muellerinc.com/cart/"
                          title="Cart"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            color:
                              "rgba(54, 69, 80, var(--bs-link-opacity, 1))",
                            border: "0px",
                            backgroundColor: "rgba(255, 255, 255, 1)",
                          }}
                        >
                          <img
                            className="mob-header-icon"
                            src="https://www.muellerinc.com/globalassets/global/icons/cart.svg"
                            style={{
                              boxSizing: "border-box",
                              verticalAlign: "middle",
                              maxWidth: "100%",
                              width: "40px",
                            }}
                          />
                        </a>
                        <span
                          id="totalCartItems-mobile"
                          className="cart-count-mobile"
                          style={{ boxSizing: "border-box" }}
                        >
                          0
                        </span>
                      </span>
                      <button
                        className="no-icon border-0 bg-white"
                        style={{
                          boxSizing: "border-box",
                          borderRadius: "0px",
                          margin: "0px",
                          fontFamily: "inherit",
                          fontSize: "inherit",
                          lineHeight: "inherit",
                          textTransform: "none",
                          appearance: "button",
                          cursor: "pointer",
                          border: "0px",
                          backgroundColor: "rgba(255, 255, 255, 1)",
                        }}
                      >
                        <img
                          src="https://www.muellerinc.com/gfx/icon-menu.svg"
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-12 col-lg-10 p-0 d-block d-lg-flex align-items-center justify-content-end"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "83.3333%",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "0px",
                paddingRight: "0px",
                paddingLeft: "0px",
                display: "flex",
              }}
            >
              <div
                className="col-12 col-lg-3 d-flex align-items-center px-3 px-lg-0 pb-3 pb-lg-0"
                style={{
                  boxSizing: "border-box",
                  flex: "0 0 auto",
                  width: "25%",
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "0px",
                  paddingLeft: "0px",
                  paddingBottom: "0px",
                }}
              >
                <div
                  className="container d-lg-flex px-0"
                  style={{
                    boxSizing: "border-box",
                    width: "100%",
                    marginRight: "auto",
                    marginLeft: "auto",
                    maxWidth: "1200px",
                    paddingRight: "0px",
                    paddingLeft: "0px",
                    display: "flex",
                  }}
                >
                  <div
                    className="input-group search-input-wrapper"
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "stretch",
                      width: "16.25rem",
                      height: "2.5rem",
                    }}
                  >
                    <input
                      id="searchInput"
                      className="form-control search-input-main"
                      type="text"
                      autoComplete="off"
                      placeholder="What are you looking for?"
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        fontFamily: "inherit",
                        padding: "0.5rem",
                        borderRadius: "0rem",
                        display: "block",
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: 1.2,
                        color: "#364550",
                        appearance: "none",
                        backgroundColor: "#fff",
                        backgroundClip: "padding-box",
                        transition: "none",
                        paddingRight: "35px",
                        flex: "1 1 auto",
                        position: "relative",
                        width: "1%",
                        minWidth: "0px",
                        borderTopRightRadius: "0px",
                        borderBottomRightRadius: "0px",
                        border: "1px solid #71777F",
                      }}
                    />
                    <span
                      className="input-group-append"
                      style={{
                        boxSizing: "border-box",
                        position: "absolute",
                        right: "2px",
                        zIndex: 11,
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        top: "0px",
                        borderTopRightRadius: "0px",
                        borderBottomRightRadius: "0px",
                        marginLeft: "calc(1px*-1)",
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                      }}
                    >
                      <button
                        className="btn no-icon bg-white clear-search-btn"
                        type="button"
                        alt="Clear Search Button"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          textTransform: "none",
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          appearance: "button",
                          border: "1px solid transparent",
                          borderRadius: "0rem",
                          fontFamily: "var(--bs-btn-font-family)",
                          fontSize: "1rem",
                          fontWeight: 600,
                          lineHeight: 1.2,
                          color: "#364550",
                          textAlign: "center",
                          verticalAlign: "middle",
                          userSelect: "none",
                          transition: "none",
                          cursor: "pointer",
                          position: "relative",
                          zIndex: 2,
                          padding: "0rem",
                          display: "none",
                          width: "1.25rem",
                          height: "1.25rem",
                          backgroundColor: "rgba(255, 255, 255, 1)",
                        }}
                      >
                        <img
                          alt="Search"
                          src="https://www.muellerinc.com/gfx/close-large-green.svg"
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                          }}
                        />
                      </button>
                      <span
                        className="vr line-75"
                        style={{
                          boxSizing: "border-box",
                          width: "1px",
                          minHeight: "1em",
                          margin: "0rem 0.5rem",
                          height: "20px",
                          flexGrow: 0,
                          backgroundColor: "#c7c9cb",
                          opacity: 1,
                          alignSelf: "center",
                          display: "none",
                        }}
                      />
                      <button
                        id="global_search_button"
                        className="btn no-icon bg-white search-btn js-global-search"
                        type="button"
                        alt="Search"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          textTransform: "none",
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          appearance: "button",
                          border: "1px solid transparent",
                          borderRadius: "0rem",
                          display: "inline-block",
                          fontFamily: "var(--bs-btn-font-family)",
                          fontSize: "1rem",
                          fontWeight: 600,
                          lineHeight: 1.2,
                          color: "#364550",
                          textAlign: "center",
                          verticalAlign: "middle",
                          userSelect: "none",
                          transition: "none",
                          cursor: "pointer",
                          position: "relative",
                          zIndex: 2,
                          padding: "0rem",
                          width: "2rem",
                          height: "2rem",
                          backgroundColor: "rgba(255, 255, 255, 1)",
                        }}
                      >
                        <img
                          alt="Search"
                          src="https://www.muellerinc.com/gfx/search-icon.svg"
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                          }}
                        />
                      </button>
                    </span>
                    <div
                      className="master_expanded_dropdown"
                      aria-live="polite"
                      style={{
                        boxSizing: "border-box",
                        padding: "8px 0px",
                        overflow: "auto",
                        width: "100%",
                        height: "310px",
                        alignSelf: "stretch",
                        flexGrow: 0,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        boxShadow: "rgba(0, 0, 0, 0.25) 0px 11px 13px 0px",
                        backgroundColor: "#fff",
                        position: "absolute",
                        top: "100%",
                        zIndex: 1,
                        marginLeft: "calc(1px*-1)",
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                        display: "none",
                      }}
                    >
                      <div
                        className="autocomplete-wrapper w-100"
                        style={{ boxSizing: "border-box", width: "100%" }}
                      >
                        <div
                          className="master_dropdown_list"
                          style={{ boxSizing: "border-box" }}
                        >
                          <div
                            className="js-autocomplete-results"
                            style={{ boxSizing: "border-box" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-9 d-none d-lg-flex align-items-center justify-content-lg-between"
                style={{
                  boxSizing: "border-box",
                  flex: "0 0 auto",
                  width: "75%",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="d-flex"
                    style={{ boxSizing: "border-box", display: "flex" }}
                  >
                    <object
                      className="header-del-icon"
                      type="image/svg+xml"
                      data="/globalassets/global/icons/location.svg"
                      style={{
                        boxSizing: "border-box",
                        width: "4rem",
                        height: "4rem",
                      }}
                    />
                  </div>
                  <div
                    className="lh-2"
                    style={{ boxSizing: "border-box", lineHeight: 1.2 }}
                  >
                    <div
                      className="d-flex align-items-center gap-2"
                      style={{
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span
                        className="text-secondary fs-7 lh-2 fw-light"
                        style={{
                          boxSizing: "border-box",
                          fontSize: "0.875rem",
                          lineHeight: "140%",
                          color: "rgba(54, 69, 80, 1)",
                          fontWeight: 400,
                        }}
                      >
                        Nearest Store:
                      </span>
                      <a
                        className="fs-6 fw-bold text-brand-green icon-link text-decoration-underline header-main__storetown js-show-find-store-popup text-nowrap"
                        aria-label="Select Location"
                        href="https://www.muellerinc.com/#"
                        style={{
                          boxSizing: "border-box",
                          gap: "0.375rem",
                          display: "inline-flex",
                          alignItems: "center",
                          textUnderlineOffset: "0.25em",
                          backfaceVisibility: "hidden",
                          lineHeight: "140%",
                          color: "#235F81",
                          fontSize: "0.875rem",
                          textDecoration: "underline",
                          textDecorationColor: "initial",
                          whiteSpace: "nowrap",
                          fontWeight: 700,
                        }}
                      >
                        {"Select Location"}
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="d-flex"
                    style={{ boxSizing: "border-box", display: "flex" }}
                  >
                    <object
                      className="header-del-icon"
                      type="image/svg+xml"
                      data="/globalassets/global/icons/delivery-icon.svg"
                      style={{
                        boxSizing: "border-box",
                        width: "4rem",
                        height: "4rem",
                      }}
                    />
                  </div>
                  <div
                    className="lh-2 header-delivery-section"
                    style={{ boxSizing: "border-box", lineHeight: 1.2 }}
                  >
                    <div
                      className="d-flex flex-column align-items-start"
                      style={{
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        className="d-flex align-items-center gap-2"
                        style={{
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <span
                          className="text-secondary fs-7 lh-2 fw-light text-nowrap"
                          style={{
                            boxSizing: "border-box",
                            fontSize: "0.875rem",
                            lineHeight: "140%",
                            whiteSpace: "nowrap",
                            color: "rgba(54, 69, 80, 1)",
                            fontWeight: 400,
                          }}
                        >
                          Delivery To:
                        </span>
                        <a
                          id="headerDeliveryInfolabel"
                          className="fs-7 text-secondary-blue fw-bold icon-link lh-2 text-decoration-underline header-main__delivery-zip"
                          role="button"
                          style={{
                            boxSizing: "border-box",
                            cursor: "pointer",
                            gap: "0.375rem",
                            display: "inline-flex",
                            alignItems: "center",
                            textUnderlineOffset: "0.25em",
                            backfaceVisibility: "hidden",
                            fontSize: "0.875rem",
                            lineHeight: "140%",
                            color: "#144778",
                            textDecoration: "underline",
                            textDecorationColor: "initial",
                            fontWeight: 700,
                          }}
                        />
                      </div>
                      <a
                        id="headerDeliveryInfo"
                        className="fs-7 fw-bold text-brand-green lh-2 text-decoration-underline text-nowrap"
                        aria-label="Change Location"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          cursor: "pointer",
                          fontSize: "0.875rem",
                          lineHeight: "140%",
                          color: "#235F81",
                          textDecoration: "underline",
                          whiteSpace: "nowrap",
                          fontWeight: 700,
                        }}
                      >
                        Change Location
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center gap-2"
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    role="button"
                    style={{ boxSizing: "border-box", cursor: "pointer" }}
                  >
                    <object
                      className="header__avatar-icon"
                      type="image/svg+xml"
                      data="/globalassets/global/icons/avatar.svg"
                      style={{ boxSizing: "border-box" }}
                    />
                  </span>
                  <div
                    className="lh-2 header-account-section"
                    style={{ boxSizing: "border-box", lineHeight: 1.2 }}
                  >
                    <div
                      className="d-flex flex-column"
                      style={{
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <span
                        className="fw-bold text-secondary fs-5 lh-2"
                        style={{
                          boxSizing: "border-box",
                          lineHeight: "140%",
                          fontSize: "1rem",
                          color: "rgba(54, 69, 80, 1)",
                          fontWeight: 700,
                        }}
                      >
                        Account
                      </span>
                      <a
                        id="headerAccountManagement"
                        className="fs-7 fw-bold text-brand-green lh-2 text-decoration-underline text-nowrap"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          cursor: "pointer",
                          fontSize: "0.875rem",
                          lineHeight: "140%",
                          color: "#235F81",
                          textDecoration: "underline",
                          whiteSpace: "nowrap",
                          fontWeight: 700,
                        }}
                      >
                        Sign in / Register
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center position-relative"
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="cart-icon-width"
                    role="button"
                    style={{
                      boxSizing: "border-box",
                      cursor: "pointer",
                      width: "max-content",
                    }}
                  >
                    <a
                      aria-label="Cart"
                      href="https://www.muellerinc.com/cart/"
                      title="Cart"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgba(54, 69, 80, var(--bs-link-opacity, 1))",
                      }}
                    >
                      <img
                        className="img-fluid"
                        src="https://www.muellerinc.com/globalassets/global/icons/cart.svg"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </a>
                  </span>
                  <span
                    id="totalCartItems-desktop"
                    className="cart-count-desktop"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "50%",
                      padding: "4px 9px",
                      position: "absolute",
                      top: "-2px",
                      right: "0px",
                      backgroundColor: "rgb(58, 130, 107)",
                      fontSize: "13px",
                      fontWeight: "bold",
                      width: "28px",
                      color: "rgb(255, 255, 255)",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    0
                  </span>
                </div>
              </div>
              <div
                className="d-flex d-lg-none bg-secondary pt-2 pb-3"
                style={{
                  boxSizing: "border-box",
                  paddingTop: "0.5rem",
                  paddingBottom: "1rem",
                  backgroundColor: "rgba(54, 69, 80, 1)",
                  display: "none",
                }}
              >
                <div
                  className="container row mx-auto px-0"
                  style={{
                    boxSizing: "border-box",
                    width: "100%",
                    maxWidth: "1200px",
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "calc(-1*0)",
                    marginRight: "auto",
                    marginLeft: "auto",
                    paddingRight: "0px",
                    paddingLeft: "0px",
                  }}
                >
                  <div
                    className="col-12 col-sm-8 col-md-9 d-flex align-items-center justify-content-start ps-0"
                    style={{
                      boxSizing: "border-box",
                      maxWidth: "100%",
                      paddingRight: "calc(1rem*.5)",
                      marginTop: "0",
                      flex: "0 0 auto",
                      flexShrink: 0,
                      width: "75%",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingLeft: "0px",
                    }}
                  >
                    <div
                      className="d-flex align-items-center"
                      style={{
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <object
                        className="header-loc-icon"
                        type="image/svg+xml"
                        data="/gfx/location-icon.svg"
                        style={{
                          boxSizing: "border-box",
                          padding:
                            "0.32694rem 0.58594rem 0.34494rem 0.56169rem",
                          width: "2.6875rem",
                          height: "2.6875rem",
                        }}
                      >
                        {" "}
                      </object>
                      <div
                        className="d-flex flex-column align-items-start lh-2"
                        style={{
                          boxSizing: "border-box",
                          lineHeight: 1.2,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <a
                          className="fs-small fw-bold text-primary icon-link lh-2 header-main__storetown js-show-find-store-popup"
                          aria-label="Nearest Store:"
                          href="https://www.muellerinc.com/#"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            gap: "0.375rem",
                            display: "inline-flex",
                            alignItems: "center",
                            textDecorationColor:
                              "rgba(54, 69, 80, var(--bs-link-opacity, 0.5))",
                            textUnderlineOffset: "0.25em",
                            backfaceVisibility: "hidden",
                            fontSize: "0.75rem",
                            lineHeight: "140%",
                            fontWeight: 700,
                            color: "#FF6C0E",
                          }}
                        >
                          {" "}
                          Select Location
                        </a>
                      </div>
                    </div>
                    <div
                      className="loc-divider"
                      style={{
                        boxSizing: "border-box",
                        margin: "0rem 0.725rem",
                        width: "0.0625rem",
                        backgroundColor: "#ffc81b",
                        height: "100%",
                      }}
                    />
                    <div
                      className="d-flex flex-column align-items-start lh-2"
                      style={{
                        boxSizing: "border-box",
                        lineHeight: 1.2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        className="fw-bold text-white fs-small lh-2"
                        style={{
                          boxSizing: "border-box",
                          fontSize: "0.75rem",
                          lineHeight: "140%",
                          color: "rgba(255, 255, 255, 1)",
                          fontWeight: 700,
                        }}
                      >
                        Delivery To:
                      </span>
                      <a
                        className="fs-small text-primary fw-bold icon-link lh-2 header-main__delivery-zip"
                        aria-label="Deliver to:"
                        href="https://www.muellerinc.com/#"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          gap: "0.375rem",
                          display: "inline-flex",
                          alignItems: "center",
                          textDecorationColor:
                            "rgba(54, 69, 80, var(--bs-link-opacity, 0.5))",
                          textUnderlineOffset: "0.25em",
                          backfaceVisibility: "hidden",
                          fontSize: "0.75rem",
                          lineHeight: "140%",
                          fontWeight: 700,
                          color: "#FF6C0E",
                        }}
                      >
                        Change Location
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 d-flex align-items-center justify-content-end mt-3 mt-sm-0"
                    style={{
                      boxSizing: "border-box",
                      maxWidth: "100%",
                      paddingRight: "calc(1rem*.5)",
                      paddingLeft: "calc(1rem*.5)",
                      flex: "0 0 auto",
                      flexShrink: 0,
                      width: "25%",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      marginTop: "0px",
                    }}
                  >
                    <a
                      className="btn btn-primary-white"
                      href="https://www.muellerinc.com/get-a-quote/"
                      role="button"
                      title="Get A Quote"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.5rem 1rem",
                        border: "1px solid #fff",
                        display: "inline-block",
                        fontFamily: "var(--bs-btn-font-family)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        lineHeight: 1.2,
                        color: "#364550",
                        textAlign: "center",
                        verticalAlign: "middle",
                        cursor: "pointer",
                        userSelect: "none",
                        backgroundColor: "#fff",
                        transition: "none",
                        borderRadius: "0rem",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      }}
                    >
                      {"Get A Quote"}
                    </a>
                  </div>
                </div>
              </div>
              <div
                id="navFindStoreModal"
                className="modal fade nav-loc-modal"
                aria-hidden="true"
                aria-labelledby="navFindStoreModalLabel"
                tabIndex="-1"
                style={{
                  boxSizing: "border-box",
                  transition: "none",
                  overflow: "hidden auto",
                  outline: "0px",
                  position: "fixed",
                  top: "0px",
                  left: "0px",
                  zIndex: 1055,
                  display: "none",
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                }}
              />
              <div
                className="d-none"
                style={{ boxSizing: "border-box", display: "none" }}
              >
                <div
                  id="header-del__popover-content"
                  style={{ boxSizing: "border-box" }}
                >
                  <div
                    className="d-flex justify-content-between mb-3"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <label
                      className="fw-semibold"
                      htmlFor="searchdeliverylocation"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        fontWeight: 500,
                      }}
                    >
                      Enter your delivery Zip Code
                    </label>
                    <button
                      className="btn-close close-change-delivery-loc"
                      type="button"
                      aria-label="Close Search Delivery Location Modal"
                      style={{
                        margin: "0px",
                        fontFamily: "inherit",
                        fontSize: "inherit",
                        lineHeight: "inherit",
                        textTransform: "none",
                        appearance: "button",
                        background:
                          'rgba(0,0,0,0) url("data:image/svg+xml,<svg width=\\"20\\" height=\\"20\\" viewBox=\\"0 0 20 20\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><mask id=\\"path-1-outside-1_23342_1260990\\" maskUnits=\\"userSpaceOnUse\\" x=\\"5.89062\\" y=\\"5.88672\\" width=\\"8\\" height=\\"8\\" fill=\\"black\\"><rect fill=\\"white\\" x=\\"5.89062\\" y=\\"5.88672\\" width=\\"8\\" height=\\"8\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M13.0844 13.3918C13.1362 13.4437 13.1816 13.4567 13.2465 13.4567L13.253 13.4502C13.2984 13.4502 13.3632 13.4372 13.3957 13.4048C13.4735 13.3075 13.4735 13.1583 13.3957 13.0805L10.5031 10.1757L13.4087 7.28236C13.4865 7.18508 13.4865 7.03591 13.4087 6.95808C13.3114 6.88025 13.1622 6.88025 13.0844 6.95808L10.1795 9.8507L7.28618 6.94509C7.1889 6.86726 7.03973 6.86726 6.9619 6.94509C6.88407 7.04237 6.88407 7.19154 6.9619 7.26937L9.8607 10.1682L6.949 13.0676C6.87117 13.1648 6.87117 13.314 6.949 13.3918C7.00088 13.4437 7.04628 13.4567 7.11114 13.4567C7.17599 13.4567 7.22788 13.4372 7.27328 13.3918L10.185 10.4925L13.0844 13.3918Z\\"/></mask><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M13.0844 13.3918C13.1362 13.4437 13.1816 13.4567 13.2465 13.4567L13.253 13.4502C13.2984 13.4502 13.3632 13.4372 13.3957 13.4048C13.4735 13.3075 13.4735 13.1583 13.3957 13.0805L10.5031 10.1757L13.4087 7.28236C13.4865 7.18508 13.4865 7.03591 13.4087 6.95808C13.3114 6.88025 13.1622 6.88025 13.0844 6.95808L10.1795 9.8507L7.28618 6.94509C7.1889 6.86726 7.03973 6.86726 6.9619 6.94509C6.88407 7.04237 6.88407 7.19154 6.9619 7.26937L9.8607 10.1682L6.949 13.0676C6.87117 13.1648 6.87117 13.314 6.949 13.3918C7.00088 13.4437 7.04628 13.4567 7.11114 13.4567C7.17599 13.4567 7.22788 13.4372 7.27328 13.3918L10.185 10.4925L13.0844 13.3918Z\\" fill=\\"%232E8566\\"/><path d=\\"M13.2465 13.4567V13.7067H13.35L13.4233 13.6335L13.2465 13.4567ZM13.0844 13.3918L13.2611 13.215V13.215L13.0844 13.3918ZM13.253 13.4502V13.2002H13.1494L13.0762 13.2734L13.253 13.4502ZM13.3957 13.4048L13.5724 13.5816L13.5822 13.5718L13.5909 13.561L13.3957 13.4048ZM13.3957 13.0805L13.2185 13.2569L13.2189 13.2573L13.3957 13.0805ZM10.5031 10.1757L10.3267 9.99852L10.1496 10.1749L10.326 10.3521L10.5031 10.1757ZM13.4087 7.28236L13.5851 7.45951L13.5951 7.44956L13.6039 7.43854L13.4087 7.28236ZM13.4087 6.95808L13.5855 6.78131L13.5757 6.77151L13.5649 6.76286L13.4087 6.95808ZM13.0844 6.95808L13.2608 7.13523L13.2612 7.13486L13.0844 6.95808ZM10.1795 9.8507L10.0024 10.0271L10.1788 10.2043L10.3559 10.0279L10.1795 9.8507ZM7.28618 6.94509L7.46333 6.76869L7.45338 6.75869L7.44236 6.74987L7.28618 6.94509ZM6.9619 6.94509L6.78513 6.76831L6.77533 6.7781L6.76668 6.78892L6.9619 6.94509ZM9.8607 10.1682L10.0371 10.3453L10.2146 10.1685L10.0375 9.99139L9.8607 10.1682ZM6.949 13.0676L6.77259 12.8904L6.76259 12.9004L6.75378 12.9114L6.949 13.0676ZM6.949 13.3918L6.77222 13.5686L6.77222 13.5686L6.949 13.3918ZM7.27328 13.3918L7.09688 13.2147L7.0965 13.2151L7.27328 13.3918ZM10.185 10.4925L10.3618 10.3157L10.1854 10.1393L10.0086 10.3153L10.185 10.4925ZM13.2465 13.2067C13.23 13.2067 13.2355 13.2048 13.2483 13.2096C13.2546 13.212 13.2596 13.2148 13.2627 13.2169C13.2654 13.2187 13.2649 13.2189 13.2611 13.215L12.9076 13.5686C12.9528 13.6138 13.0064 13.6529 13.0728 13.6778C13.1374 13.702 13.1981 13.7067 13.2465 13.7067V13.2067ZM13.0762 13.2734L13.0697 13.2799L13.4233 13.6335L13.4297 13.627L13.0762 13.2734ZM13.2189 13.228C13.2338 13.2131 13.2469 13.2057 13.2527 13.2028C13.2588 13.1996 13.2621 13.1988 13.2615 13.199C13.2611 13.1991 13.2595 13.1995 13.2569 13.1998C13.2544 13.2002 13.2528 13.2002 13.253 13.2002V13.7002C13.2968 13.7002 13.3473 13.6943 13.3969 13.6803C13.4423 13.6675 13.5132 13.6408 13.5724 13.5816L13.2189 13.228ZM13.2189 13.2573C13.2099 13.2483 13.2061 13.2402 13.2048 13.2366C13.2035 13.2332 13.204 13.2327 13.204 13.2354C13.204 13.2379 13.2036 13.2411 13.2025 13.2442C13.202 13.2457 13.2015 13.2468 13.2011 13.2475C13.2007 13.2483 13.2004 13.2486 13.2004 13.2486L13.5909 13.561C13.668 13.4646 13.704 13.3468 13.704 13.2354C13.704 13.1251 13.668 12.9993 13.5724 12.9037L13.2189 13.2573ZM10.326 10.3521L13.2185 13.2569L13.5728 12.9041L10.6803 9.99927L10.326 10.3521ZM13.2323 7.10521L10.3267 9.99852L10.6795 10.3528L13.5851 7.45951L13.2323 7.10521ZM13.2319 7.13486C13.223 7.12589 13.2192 7.11781 13.2178 7.11421C13.2166 7.11078 13.2171 7.1103 13.2171 7.11293C13.2171 7.11545 13.2166 7.11869 13.2156 7.12179C13.2151 7.12323 13.2146 7.12433 13.2142 7.1251C13.2137 7.12587 13.2135 7.1262 13.2135 7.12619L13.6039 7.43854C13.681 7.34219 13.7171 7.22439 13.7171 7.11293C13.7171 7.00266 13.681 6.87687 13.5855 6.78131L13.2319 7.13486ZM13.2612 7.13486C13.2522 7.14383 13.2441 7.14761 13.2405 7.14894C13.2371 7.1502 13.2366 7.14971 13.2393 7.14971C13.2418 7.14971 13.245 7.15018 13.2481 7.15122C13.2496 7.15171 13.2507 7.15221 13.2514 7.15263C13.2522 7.15304 13.2525 7.1533 13.2525 7.1533L13.5649 6.76286C13.4685 6.68579 13.3507 6.64971 13.2393 6.64971C13.129 6.64971 13.0032 6.68574 12.9076 6.7813L13.2612 7.13486ZM10.3559 10.0279L13.2608 7.13523L12.908 6.78093L10.0031 9.67355L10.3559 10.0279ZM7.10903 7.12149L10.0024 10.0271L10.3567 9.6743L7.46333 6.76869L7.10903 7.12149ZM7.13868 7.12187C7.12971 7.13083 7.12163 7.13462 7.11802 7.13594C7.1146 7.1372 7.11412 7.13672 7.11675 7.13672C7.11927 7.13672 7.12251 7.13719 7.12561 7.13823C7.12705 7.13871 7.12815 7.13922 7.12892 7.13964C7.12969 7.14005 7.13002 7.14031 7.13001 7.14031L7.44236 6.74987C7.34601 6.67279 7.22821 6.63672 7.11675 6.63672C7.00648 6.63672 6.88069 6.67275 6.78513 6.76831L7.13868 7.12187ZM7.13868 7.0926C7.14764 7.10156 7.15143 7.10965 7.15275 7.11325C7.15402 7.11668 7.15353 7.11715 7.15353 7.11453C7.15353 7.112 7.154 7.10876 7.15504 7.10566C7.15553 7.10423 7.15603 7.10312 7.15645 7.10235C7.15686 7.10159 7.15712 7.10126 7.15712 7.10126L6.76668 6.78892C6.68961 6.88526 6.65353 7.00306 6.65353 7.11453C6.65353 7.22479 6.68956 7.35059 6.78512 7.44615L7.13868 7.0926ZM10.0375 9.99139L7.13868 7.0926L6.78512 7.44615L9.68392 10.3449L10.0375 9.99139ZM7.1254 13.2447L10.0371 10.3453L9.6843 9.99102L6.77259 12.8904L7.1254 13.2447ZM7.12577 13.2151C7.13474 13.224 7.13852 13.2321 7.13985 13.2357C7.14111 13.2391 7.14062 13.2396 7.14062 13.237C7.14062 13.2345 7.14109 13.2312 7.14214 13.2281C7.14262 13.2267 7.14313 13.2256 7.14354 13.2248C7.14395 13.2241 7.14422 13.2237 7.14421 13.2237L6.75378 12.9114C6.6767 13.0077 6.64062 13.1255 6.64062 13.237C6.64062 13.3473 6.67666 13.4731 6.77222 13.5686L7.12577 13.2151ZM7.11114 13.2067C7.09468 13.2067 7.1002 13.2048 7.11298 13.2096C7.11925 13.212 7.12421 13.2148 7.12731 13.2169C7.13005 13.2187 7.12958 13.2189 7.12577 13.2151L6.77222 13.5686C6.81747 13.6139 6.87102 13.6529 6.93742 13.6778C7.00209 13.7021 7.06274 13.7067 7.11114 13.7067V13.2067ZM7.0965 13.2151C7.09574 13.2158 7.09649 13.215 7.09884 13.2134C7.10127 13.2118 7.10439 13.2101 7.10787 13.2087C7.1154 13.2057 7.11819 13.2067 7.11114 13.2067V13.7067C7.23588 13.7067 7.35342 13.6653 7.45005 13.5686L7.0965 13.2151ZM10.0086 10.3153L7.09688 13.2147L7.44968 13.569L10.3614 10.6696L10.0086 10.3153ZM13.2611 13.215L10.3618 10.3157L10.0082 10.6692L12.9076 13.5686L13.2611 13.215Z\\" fill=\\"%232E8566\\" mask=\\"url%28%23path-1-outside-1_23342_1260990%29\\"/><path d=\\"M10.1807 2.01953C14.6857 2.01976 18.3408 5.67559 18.3408 10.1807C18.3406 14.6855 14.6855 18.3406 10.1807 18.3408C5.67559 18.3408 2.01976 14.6857 2.01953 10.1807C2.01953 5.67545 5.67545 2.01953 10.1807 2.01953ZM10.1807 2.72363C6.07294 2.72363 2.72363 6.07294 2.72363 10.1807C2.72386 14.2882 6.07308 17.6367 10.1807 17.6367C14.2881 17.6365 17.6365 14.2881 17.6367 10.1807C17.6367 6.07308 14.2882 2.72386 10.1807 2.72363Z\\" fill=\\"%232E8566\\" stroke=\\"%232E8566\\" stroke-width=\\"0.5\\"/></svg>") center/1em auto no-repeat',
                        border: "0px",
                        borderRadius: "0rem",
                        boxSizing: "content-box",
                        color: "#fff",
                        opacity: 1,
                        cursor: "pointer",
                        width: "20px",
                        height: "20px",
                        backgroundSize: "100% auto",
                        padding: "0px",
                      }}
                    />
                  </div>
                  <div
                    className="input-group pb-4 gap-2 store-loc-input-group"
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      display: "flex",
                      alignItems: "stretch",
                      width: "100%",
                      flexWrap: "nowrap",
                      paddingBottom: "1.5rem",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      className="d-flex flex-grow-1 flex-column"
                      style={{
                        boxSizing: "border-box",
                        borderTopRightRadius: "0px",
                        borderBottomRightRadius: "0px",
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                      }}
                    >
                      <input
                        id="searchdeliverylocation"
                        className="form-control searchdeliverylocation__zip-input-desktop"
                        name="searchdeliverylocation"
                        type="text"
                        maxLength="5"
                        pattern="[1-9]\d{4}"
                        placeholder="Enter Zip Code "
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          padding: "0.5rem",
                          border: "1px solid #8f9599",
                          borderRadius: "0rem",
                          display: "block",
                          width: "100%",
                          fontSize: "1rem",
                          fontWeight: 400,
                          lineHeight: 1.2,
                          color: "#364550",
                          appearance: "none",
                          backgroundColor: "#fff",
                          backgroundClip: "padding-box",
                          transition: "none",
                          height: "-webkit-fill-available",
                        }}
                      />
                      <span
                        className="w-100 d-none invalid-feedback searchdeliverylocation__invalid-feedback"
                        style={{
                          boxSizing: "border-box",
                          color: "#dc3545",
                          marginTop: "0.5rem",
                          fontSize: "12px",
                          display: "none",
                          width: "100%",
                        }}
                      >
                        Enter Zip Code{" "}
                      </span>
                    </div>
                    <div
                      className="input-group-btn"
                      style={{
                        boxSizing: "border-box",
                        marginLeft: "calc(1px*-1)",
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                      }}
                    >
                      <button
                        className="btn btn-primary d-flex searchdeliverylocation__update"
                        disabled
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          textTransform: "none",
                          appearance: "button",
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          padding: "0.625rem 1rem",
                          border: "1px solid #364550",
                          borderRadius: "0rem",
                          fontFamily: "var(--bs-btn-font-family)",
                          fontSize: "1rem",
                          fontWeight: 600,
                          lineHeight: 1.2,
                          textAlign: "center",
                          verticalAlign: "middle",
                          cursor: "pointer",
                          userSelect: "none",
                          transition: "none",
                          position: "relative",
                          zIndex: 2,
                          borderColor: "#8f9599",
                          color: "#71777f",
                          pointerEvents: "none",
                          backgroundColor: "#f1f2f4",
                          opacity: 1,
                          display: "flex",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            fontSize: "0.875rem",
                            lineHeight: "120%",
                            fontWeight: 700,
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        >
                          Update
                        </span>
                      </button>
                    </div>
                  </div>
                  <hr
                    className="mt-2 mb-2"
                    style={{
                      boxSizing: "border-box",
                      margin: "1rem 0px",
                      borderRight: "0px",
                      borderBottom: "0px",
                      borderLeft: "0px",
                      borderImage: "none",
                      borderTop: "1px solid",
                      color: "inherit",
                      opacity: 0.25,
                      marginTop: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  />
                  <div
                    className="d-flex gap-2"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      gap: "0.5rem",
                    }}
                  >
                    <object
                      type="image/svg+xml"
                      data="/gfx/delivery-icon-green.svg"
                      style={{ boxSizing: "border-box" }}
                    >
                      {" "}
                    </object>
                    <p
                      className="mb-0"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        marginBottom: "0px",
                      }}
                    >
                      Your Zip Code helps us provide the most accurate delivery
                      information
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="changeLocModal"
                className="modal fade change-loc-modal"
                aria-hidden="true"
                aria-labelledby="changeLocModalLabel"
                tabIndex="-1"
                style={{
                  boxSizing: "border-box",
                  transition: "none",
                  overflow: "hidden auto",
                  outline: "0px",
                  position: "fixed",
                  top: "0px",
                  left: "0px",
                  zIndex: 1055,
                  display: "none",
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                }}
              >
                <div
                  className="modal-dialog modal-fullscreen-md-down"
                  style={{
                    boxSizing: "border-box",
                    margin: "1.75rem",
                    position: "relative",
                    width: "auto",
                    pointerEvents: "none",
                    maxWidth: "500px",
                    marginRight: "auto",
                    marginLeft: "auto",
                    transform: "translate(0px, -50px)",
                    transition: "none",
                  }}
                >
                  <div
                    className="modal-content"
                    style={{
                      boxSizing: "border-box",
                      border: "1px solid rgba(0, 0, 0, 0.175)",
                      borderRadius: "0rem",
                      outline: "0px",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      color: "var(--bs-modal-color)",
                      pointerEvents: "auto",
                      backgroundColor: "#fff",
                      backgroundClip: "padding-box",
                    }}
                  >
                    <div
                      className="modal-header justify-content-between bg-dark"
                      style={{
                        boxSizing: "border-box",
                        padding: "1rem 1rem",
                        borderBottom: "1px solid #8f9599",
                        display: "flex",
                        flexShrink: 0,
                        alignItems: "center",
                        borderTopLeftRadius: "calc(0rem - (1px))",
                        borderTopRightRadius: "calc(0rem - (1px))",
                        justifyContent: "space-between",
                        backgroundColor: "rgba(54, 69, 80, 1)",
                      }}
                    >
                      <h4
                        id="changeLocModalLabel"
                        className="modal-title text-white d-flex align-items-center gap-2"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          marginBottom: "0px",
                          fontSize: "1.25rem",
                          lineHeight: "140%",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "rgba(255, 255, 255, 1)",
                          fontWeight: 500,
                          textTransform: "uppercase",
                          fontFamily:
                            '"Gotham", "Gotham SSm A", "Gotham SSm B", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                        }}
                      >
                        Update Delivery Location
                      </h4>
                      <button
                        className="btn-close"
                        type="button"
                        aria-label="Close"
                        style={{
                          fontFamily: "inherit",
                          fontSize: "inherit",
                          lineHeight: "inherit",
                          textTransform: "none",
                          appearance: "button",
                          background:
                            'rgba(0,0,0,0) url("data:image/svg+xml, %3csvg width=%2733%27 height=%2733%27 viewBox=%270 0 33 33%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3e %3cg id=%27Group 307%27%3e %3cpath id=%27Vector%27 d=%27M10.2217 22.9076C10.092 22.9076 10.0012 22.8817 9.89738 22.7779C9.74173 22.6222 9.74173 22.3239 9.89738 22.1293L22.1682 9.91038C22.3239 9.75473 22.6222 9.75473 22.8168 9.91038C22.9724 10.066 22.9724 10.3644 22.8168 10.5589L10.5459 22.7779C10.4551 22.8687 10.3514 22.9076 10.2217 22.9076Z%27 fill=%27white%27/%3e %3cpath id=%27Vector_2%27 d=%27M22.4926 22.9076C22.3629 22.9076 22.2721 22.8816 22.1683 22.7779L9.92338 10.533C9.76773 10.3773 9.76773 10.079 9.92338 9.88441C10.079 9.72876 10.3774 9.72876 10.5719 9.88441L22.7909 22.1553C22.9466 22.3109 22.9466 22.6092 22.7909 22.8038C22.726 22.8687 22.5963 22.8946 22.5055 22.8946L22.4926 22.9076Z%27 fill=%27white%27/%3e %3cpath id=%27Vector_3%27 d=%27M16.3572 32.4286C7.48483 32.4286 0.285767 25.2295 0.285767 16.3571C0.285767 7.48477 7.48483 0.285706 16.3572 0.285706C25.2296 0.285706 32.4286 7.48477 32.4286 16.3571C32.4286 25.2295 25.2296 32.4286 16.3572 32.4286ZM16.3572 1.1937C8.00368 1.1937 1.19376 8.00362 1.19376 16.3571C1.19376 24.7106 8.00368 31.5206 16.3572 31.5206C24.7107 31.5206 31.5206 24.7106 31.5206 16.3571C31.5206 8.00362 24.7107 1.1937 16.3572 1.1937Z%27 fill=%27white%27/%3e %3c/g%3e %3c/svg%3e") center/1em auto no-repeat',
                          border: "0px",
                          borderRadius: "0rem",
                          boxSizing: "content-box",
                          color: "#fff",
                          opacity: 1,
                          cursor: "pointer",
                          backgroundSize: "30px auto",
                          height: "40px",
                          width: "40px",
                          padding: "0px",
                          margin: "0px",
                        }}
                      />
                    </div>
                    <div
                      className="modal-body"
                      style={{
                        boxSizing: "border-box",
                        flex: "1 1 auto",
                        padding: "1rem",
                        position: "relative",
                      }}
                    >
                      <div
                        className="mb-3"
                        style={{
                          boxSizing: "border-box",
                          marginBottom: "1rem",
                        }}
                      >
                        <a
                          className="icon-link fw-bold text-color-green nav-loc-modal__use-loc-icon-link"
                          href="https://www.muellerinc.com/#"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            gap: "0.375rem",
                            display: "inline-flex",
                            alignItems: "center",
                            textDecorationColor:
                              "rgba(54, 69, 80, var(--bs-link-opacity, 0.5))",
                            textUnderlineOffset: "0.25em",
                            backfaceVisibility: "hidden",
                            color: "#2e8566",
                            fontWeight: 700,
                          }}
                        >
                          <object
                            className="bi"
                            type="image/svg+xml"
                            data="/gfx/use-location-icon.svg"
                            style={{
                              boxSizing: "border-box",
                              flexShrink: 0,
                              fill: "currentcolor",
                              transition: "none",
                              width: "1.4375rem",
                              height: "1.4375rem",
                            }}
                          />
                          {"Use My Location"}
                        </a>
                      </div>
                      <label
                        className="form-label"
                        htmlFor="searchdeliverylocation__mobile"
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          marginBottom: "0.25rem",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          color: "#364550",
                        }}
                      >
                        Update Delivery Location{" "}
                        <span
                          className="text-green fs-7"
                          style={{
                            boxSizing: "border-box",
                            fontSize: "0.875rem",
                            lineHeight: "140%",
                            color: "rgba(46, 133, 102, 1)",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <div
                        className="input-group pb-4 mb-2 border-bottom"
                        style={{
                          boxSizing: "border-box",
                          position: "relative",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "stretch",
                          width: "100%",
                          borderBottom: "1px solid #8f9599",
                          marginBottom: "0.5rem",
                          paddingBottom: "1.5rem",
                        }}
                      >
                        <input
                          id="searchdeliverylocation__mobile"
                          className="form-control searchdeliverylocation__zip-input-mobile"
                          name="searchdeliverylocation"
                          type="text"
                          maxLength="5"
                          pattern="[1-9]\d{4}"
                          placeholder="Enter Zip Code "
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            fontFamily: "inherit",
                            padding: "0.5rem",
                            border: "1px solid #8f9599",
                            borderRadius: "0rem",
                            display: "block",
                            fontSize: "1rem",
                            fontWeight: 400,
                            lineHeight: 1.2,
                            color: "#364550",
                            appearance: "none",
                            backgroundColor: "#fff",
                            backgroundClip: "padding-box",
                            transition: "none",
                            flex: "1 1 auto",
                            position: "relative",
                            width: "1%",
                            minWidth: "0px",
                            borderTopRightRadius: "0px",
                            borderBottomRightRadius: "0px",
                          }}
                        />
                        <span
                          className="w-100 d-none invalid-feedback searchdeliverylocation__invalid-feedback-mobile"
                          style={{
                            boxSizing: "border-box",
                            color: "#dc3545",
                            marginTop: "0.5rem",
                            fontSize: "12px",
                            display: "none",
                            width: "100%",
                          }}
                        >
                          Enter Zip Code{" "}
                        </span>
                      </div>
                      <div
                        className="d-flex gap-2"
                        style={{
                          boxSizing: "border-box",
                          display: "flex",
                          gap: "0.5rem",
                        }}
                      >
                        <object
                          type="image/svg+xml"
                          data="/gfx/delivery-icon-green.svg"
                          style={{ boxSizing: "border-box" }}
                        />
                        <p
                          className="mb-0"
                          style={{
                            boxSizing: "border-box",
                            marginTop: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          Your Zip Code helps us provide the most accurate
                          delivery information
                        </p>
                      </div>
                    </div>
                    <div
                      className="modal-footer"
                      style={{
                        boxSizing: "border-box",
                        padding: "calc(1rem - 0.5rem*.5)",
                        borderTop: "1px solid #8f9599",
                        display: "flex",
                        flexShrink: 0,
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        backgroundColor: "var(--bs-modal-footer-bg)",
                        borderBottomRightRadius: "calc(0rem - (1px))",
                        borderBottomLeftRadius: "calc(0rem - (1px))",
                      }}
                    >
                      <button
                        className="btn btn-primary w-100 searchdeliverylocation__update-mobile"
                        type="button"
                        disabled
                        style={{
                          boxSizing: "border-box",
                          textTransform: "none",
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          appearance: "button",
                          padding: "0.625rem 1rem",
                          border: "1px solid #364550",
                          borderRadius: "0rem",
                          display: "inline-block",
                          fontFamily: "var(--bs-btn-font-family)",
                          fontSize: "1rem",
                          fontWeight: 600,
                          lineHeight: 1.2,
                          textAlign: "center",
                          verticalAlign: "middle",
                          cursor: "pointer",
                          userSelect: "none",
                          transition: "none",
                          margin: "calc(0.5rem*.5)",
                          borderColor: "#8f9599",
                          color: "#71777f",
                          pointerEvents: "none",
                          backgroundColor: "#f1f2f4",
                          opacity: 1,
                          width: "100%",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            fontSize: "0.875rem",
                            lineHeight: "120%",
                            fontWeight: 700,
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        >
                          Update
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-none"
                style={{ boxSizing: "border-box", display: "none" }}
              >
                <div
                  id="header_account_content"
                  style={{ boxSizing: "border-box" }}
                >
                  <div
                    className="d-flex justify-content-end"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <img
                      className="close-account-popover"
                      alt="close"
                      role="button"
                      src="https://www.muellerinc.com/gfx/close-large-green.svg"
                      style={{
                        boxSizing: "border-box",
                        verticalAlign: "middle",
                        maxWidth: "100%",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  <p
                    className="fw-bold fs-7 mb-2"
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      fontSize: "0.875rem",
                      lineHeight: "140%",
                      marginBottom: "0.5rem",
                      fontWeight: 700,
                    }}
                  >
                    Existing Users:
                  </p>
                  <a
                    className="btn btn-primary w-100"
                    href="https://www.muellerinc.com/login/"
                    title="Sign In"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      padding: "0.625rem 1rem",
                      border: "1px solid #364550",
                      display: "inline-block",
                      fontFamily: "var(--bs-btn-font-family)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      color: "#ffffff",
                      textAlign: "center",
                      verticalAlign: "middle",
                      cursor: "pointer",
                      userSelect: "none",
                      backgroundColor: "#364550",
                      transition: "none",
                      borderRadius: "0rem",
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      width: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        fontSize: "0.875rem",
                        lineHeight: "120%",
                        fontWeight: 700,
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      }}
                    >
                      Sign In
                    </span>
                  </a>
                  <hr
                    style={{
                      boxSizing: "border-box",
                      margin: "1rem 0px",
                      borderRight: "0px",
                      borderBottom: "0px",
                      borderLeft: "0px",
                      borderImage: "none",
                      borderTop: "1px solid",
                      color: "inherit",
                      opacity: 0.25,
                    }}
                  />
                  <p
                    className="fw-bold fs-7 mb-2"
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      fontSize: "0.875rem",
                      lineHeight: "140%",
                      marginBottom: "0.5rem",
                      fontWeight: 700,
                    }}
                  >
                    Not Registered?
                  </p>
                  <a
                    className="btn btn-outline-secondary-hover-gray w-100"
                    href="https://www.muellerinc.com/create-account/"
                    title="Create Account"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      padding: "0.627rem 0.627rem",
                      border: "1px solid #364550",
                      display: "inline-block",
                      fontFamily: "var(--bs-btn-font-family)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      color: "#364550",
                      textAlign: "center",
                      verticalAlign: "middle",
                      cursor: "pointer",
                      userSelect: "none",
                      backgroundColor: "#ffffff",
                      transition: "none",
                      borderRadius: "0rem",
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      width: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        fontSize: "0.875rem",
                        lineHeight: "120%",
                        fontWeight: 700,
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      }}
                    >
                      Create An Account
                    </span>
                  </a>
                  <hr
                    style={{
                      boxSizing: "border-box",
                      margin: "1rem 0px",
                      borderRight: "0px",
                      borderBottom: "0px",
                      borderLeft: "0px",
                      borderImage: "none",
                      borderTop: "1px solid",
                      color: "inherit",
                      opacity: 0.25,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
