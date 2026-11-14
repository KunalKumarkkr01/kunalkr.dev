// Components bundle — 60 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 3:16 Button (5 variants)
const __venc_Button = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Button = p => "status=" + __venc_Button(p.status);
function Button(_p = {}) {
  const props = {
    ..._p,
    buttonText: _p.buttonText ?? "Click me",
    status: _p.status ?? "focus"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 75,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      padding: "5.500px 18px 5.500px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.buttonText));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 75,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(255,255,255), inset 1px 1px 0px 0px rgb(10,10,10), inset -2px -2px 0px 0px rgb(223,223,223), inset 2px 2px 0px 0px rgb(128,128,128)",
      display: "flex",
      flexDirection: "row",
      padding: "5.500px 11.977px 5.500px 11px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.buttonText));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 75,
      height: 23,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 3px 4px 3px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "0px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.buttonText)));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 75,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      padding: "5.500px 13.984px 5.500px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(128,128,128)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.buttonText));
  const __impls = {
    // figma: Status=Neutral
    "status=neutral": __body0,
    // figma: Status=Pressed
    "status=pressed": __body1,
    // figma: Status=Focus
    "status=focus": __body2,
    // figma: Status=Inactive
    "status=inactive": __body3,
    // figma: Status=Blocked
    "status=blocked": __body3
  };
  return (__impls[__vkey_Button(props)] ?? __body2)();
}

// figma node: 3:1910 Checkbox (4 variants)
const __venc_Checkbox = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Checkbox = p => "type=" + __venc_Checkbox(p.type);
function Checkbox(_p = {}) {
  const props = {
    ..._p,
    checkboxText: _p.checkboxText ?? "This is a checkbox",
    type: _p.type ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0.500px 1.977px 0.500px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 13,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px -1px 0px 0px rgb(255,255,255), inset 1px 1px 0px 0px rgb(128,128,128), inset -2px -2px 0px 0px rgb(223,223,223), inset 2px 2px 0px 0px rgb(10,10,10)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(34,34,34)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.checkboxText));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0.500px 1.992px 0.500px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 13,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px -1px 0px 0px rgb(255,255,255), inset 1px 1px 0px 0px rgb(128,128,128), inset -2px -2px 0px 0px rgb(223,223,223), inset 2px 2px 0px 0px rgb(10,10,10)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(34,34,34)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.checkboxText), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 7,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7,
      height: 7,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 7,
    viewBox: "0 0 7 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 L 6 0 L 6 1 L 5 1 L 5 2 L 4 2 L 4 3 L 3 3 L 3 4 L 2 4 L 2 3 L 1 3 L 1 2 L 0 2 L 0 5 L 1 5 L 1 6 L 2 6 L 2 7 L 3 7 L 3 6 L 4 6 L 4 5 L 5 5 L 5 4 L 6 4 L 6 3 L 7 3 L 7 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0.500px 0px 0.500px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 13,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(255,255,255), inset 1px 1px 0px 0px rgb(128,128,128), inset -2px -2px 0px 0px rgb(223,223,223), inset 2px 2px 0px 0px rgb(10,10,10)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(128,128,128)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.checkboxText));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0.500px 2.961px 0.500px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(128,128,128)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 13,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(255,255,255), inset 1px 1px 0px 0px rgb(128,128,128), inset -2px -2px 0px 0px rgb(223,223,223), inset 2px 2px 0px 0px rgb(10,10,10)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(128,128,128)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.checkboxText), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -16,
      top: 3,
      width: 7,
      height: 7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 7,
      height: 7,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 7,
    viewBox: "0 0 7 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 L 6 0 L 6 1 L 5 1 L 5 2 L 4 2 L 4 3 L 3 3 L 3 4 L 2 4 L 2 3 L 1 3 L 1 2 L 0 2 L 0 5 L 1 5 L 1 6 L 2 6 L 2 7 L 3 7 L 3 6 L 4 6 L 4 5 L 5 5 L 5 4 L 6 4 L 6 3 L 7 3 L 7 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Checked
    "type=checked": __body1,
    // figma: Type=Inactive
    "type=inactive": __body2,
    // figma: Type=Inactive Checked
    "type=inactive checked": __body3
  };
  return (__impls[__vkey_Checkbox(props)] ?? __body0)();
}

// figma node: 128:4824 Cursors (11 variants)
const __venc_Cursors = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Cursors = p => "style2=" + __venc_Cursors(p.style2);
function Cursors(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "👆"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 11,
      height: 19,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b6432b7d1bdf1e37-9f38a91d",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11,
      height: 19
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 19,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-1433fd5d635a20c3-5904af08",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 19
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 17,
      height: 22,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-2d6f7df11c4a184a-84e9aff3",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 17,
      height: 22
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 21,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-46b90e55b0c05aaa-8055b2ec",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 21
    }
  }));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 26,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-f74cee8d659c7f8d-d11a6739",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 26
    }
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 15,
      height: 21,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-6b979df4a9947601-d1b4f29b",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 21
    }
  }));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 21,
      height: 21,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-981519794bdd6a13-04f8cb3d",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21,
      height: 21
    }
  }));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 15,
      height: 15,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d7d4ff4331a2aa02-1c4dbc46",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 15
    }
  }));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 15,
      height: 15,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-3645dcbce8c35e7b-c64e6667",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 15
    }
  }));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 21,
      height: 9,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-03295f15c5366fad-6920c6a4",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21,
      height: 9
    }
  }));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 9,
      height: 21,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-652b09fd511f0979-da005485",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9,
      height: 21
    }
  }));
  const __impls = {
    // figma: Style=↖️
    "style2=↖️": __body0,
    // figma: Style=↖️?
    "style2=↖️?": __body1,
    // figma: Style=👆
    "style2=👆": __body2,
    // figma: Style=↖️⏳
    "style2=↖️⏳": __body3,
    // figma: Style=↖️💿
    "style2=↖️💿": __body4,
    // figma: Style=Point (Top)
    "style2=point (top)": __body5,
    // figma: Style=Expand (All)
    "style2=expand (all)": __body6,
    // figma: Style=Expand (R)
    "style2=expand (r)": __body7,
    // figma: Style=Expand (L)
    "style2=expand (l)": __body8,
    // figma: Style=Expand (Horiz)
    "style2=expand (horiz)": __body9,
    // figma: Style=Expand (Vert)
    "style2=expand (vert)": __body10
  };
  return (__impls[__vkey_Cursors(props)] ?? __body2)();
}

// figma node: 3:1127 executable-0
function Executable0(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-adc9b111574ef9cd",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32
    }
  }));
}

// figma node: 4:73 Desktop Shortcut (6 variants)
const __venc_DesktopShortcut = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_DesktopShortcut = p => "type=" + __venc_DesktopShortcut(p.type) + '|' + "blackText=" + __venc_DesktopShortcut(p.blackText);
function DesktopShortcut(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default",
    blackText: _p.blackText ?? true,
    text: _p.text ?? "Change me"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Executable0, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Executable0, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      outline: "1px dashed rgb(255,127,127)",
      outlineOffset: "0px",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Executable0, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(0,10,113)",
      outline: "1px dashed rgb(255,255,255)",
      outlineOffset: "0px",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text)));
  const __impls = {
    // figma: Type=Default, Black Text=False
    "type=default|blackText=false": __body0,
    // figma: Type=Type6, Black Text=True
    "type=type6|blackText=true": __body0,
    // figma: Type=Focused, Black Text=False
    "type=focused|blackText=false": __body1,
    // figma: Type=Type5, Black Text=True
    "type=type5|blackText=true": __body1,
    // figma: Type=Select, Black Text=False
    "type=select|blackText=false": __body2,
    // figma: Type=Type4, Black Text=True
    "type=type4|blackText=true": __body2
  };
  return (__impls[__vkey_DesktopShortcut(props)] ?? __body0)();
}

// figma node: 3:2113 Dropdown (2 variants)
const __venc_Dropdown = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Dropdown = p => "type=" + __venc_Dropdown(p.type);
function Dropdown(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default",
    text: _p.text ?? "Text here"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 98,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px -1px 0px 0px rgb(255,255,255), inset 1px 1px 0px 0px rgb(128,128,128), inset -2px -2px 0px 0px rgb(223,223,223), inset 2px 2px 0px 0px rgb(10,10,10)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 4px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(0,0,0)",
      zIndex: 2,
      flexShrink: 0
    }
  }, props.text), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      overflow: "hidden",
      zIndex: 1,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 16,
    viewBox: "0 0 15 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 16,
      color: "rgb(223,223,223)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 0 L 0 0 L 0 16 L 1 16 L 1 1 L 15 1 L 15 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 14,
    viewBox: "0 0 13 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 13,
      height: 14,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 0 0 L 0 14 L 1 14 L 1 1 L 13 1 L 13 0 L 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 17,
    viewBox: "0 0 16 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 17,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 17 L 0 17 L 0 16 L 15 16 L 15 0 L 16 0 L 16 17 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 15,
    viewBox: "0 0 14 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 15,
      color: "rgb(128,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 0 L 13 0 L 13 14 L 0 14 L 0 15 L 14 15 L 14 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 13,
    viewBox: "0 0 12 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 12,
      height: 13,
      color: "rgb(192,192,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 12 0 L 12 13 L 0 13 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 4,
    viewBox: "0 0 7 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 6,
      width: 7,
      height: 4,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 L 0 0 L 0 1 L 1 1 L 1 2 L 2 2 L 2 3 L 3 3 L 3 4 L 4 4 L 4 3 L 5 3 L 5 2 L 6 2 L 6 1 L 7 1 L 7 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Blocked
    "type=blocked": __body0
  };
  return (__impls[__vkey_Dropdown(props)] ?? __body0)();
}

// figma node: 103:4580 Emoji (3 variants)
const __venc_Emoji = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Emoji = p => "property1=" + __venc_Emoji(p.property1);
function Emoji(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "lose"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20.831,
      height: 21.186,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.451,
      top: 3.739,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.155,
      top: 3.739,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.676,
      top: 2.492,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.127,
      top: 7.478,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.352,
      top: 7.478,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.127,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.901,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.901,
      top: 7.478,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.127,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.352,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.901,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.676,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.676,
      top: 7.478,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.451,
      top: 7.478,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.225,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.38,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.676,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.704,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.704,
      top: 7.478,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.704,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.929,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.929,
      top: 7.478,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.155,
      top: 7.478,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.929,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.802,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.028,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.577,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.478,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.253,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.352,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.253,
      top: 7.478,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.478,
      top: 7.478,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.253,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.478,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.929,
      top: 2.492,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.225,
      top: 4.985,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.225,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.38,
      top: 4.985,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.38,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 7.478,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 9.97,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 11.216,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 12.462,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 7.478,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 9.97,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 11.216,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 12.462,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,7.352,21.186)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,8.577,21.186)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,9.802,21.186)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,11.028,21.186)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,12.253,21.186)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,7.352,16.201)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,8.577,16.201)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,9.802,16.201)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,11.028,16.201)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,12.253,16.201)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,7.352,1.247)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,8.577,1.247)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,9.802,1.247)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,11.028,1.247)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,12.253,1.246)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.225,
      top: 13.708,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.225,
      top: 14.955,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.38,
      top: 13.708,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.38,
      top: 14.955,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.451,
      top: 16.201,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.676,
      top: 17.447,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.901,
      top: 12.462,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.155,
      top: 16.201,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.929,
      top: 17.447,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.704,
      top: 12.462,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.901,
      top: 18.693,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.127,
      top: 18.693,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.127,
      top: 13.708,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.478,
      top: 18.693,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.478,
      top: 13.708,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.704,
      top: 18.693,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.901,
      top: 1.246,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.127,
      top: 1.246,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.478,
      top: 1.246,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.704,
      top: 1.246,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20.83,
      height: 21.186,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.500,
    height: 19,
    viewBox: "0 0 19.500 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.5,
      top: 1,
      width: 19.5,
      height: 19,
      color: "rgb(255,255,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.5 5 L 0 7.5 L 0.5 12.5 L 5 18.5 L 6 18.5 L 7 19 L 12.5 19 L 13.5 18.5 L 15 18.5 L 18.5 14 L 19.5 12 L 19.5 7 L 18.5 6 L 18.5 4.5 L 15.5 1.5 L 12.5 0 L 7 0 L 1.5 4 L 1.5 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.45,
      top: 3.739,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.154,
      top: 3.739,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.676,
      top: 2.493,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.126,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.352,
      top: 4.985,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.901,
      top: 4.985,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.352,
      top: 7.477,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.901,
      top: 7.477,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.866,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.091,
      top: 4.985,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.64,
      top: 4.985,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.091,
      top: 7.477,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.64,
      top: 7.477,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.929,
      top: 2.493,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.225,
      top: 4.985,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.225,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.379,
      top: 4.985,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.379,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 7.477,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 8.723,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 9.97,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 11.216,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 12.462,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 7.477,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 8.723,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 9.97,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 11.216,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 12.462,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,7.352,21.186)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,8.577,21.186)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,9.802,21.185)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,11.028,21.185)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,12.253,21.185)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,13.478,12.462)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,12.253,12.462)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,11.028,12.462)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,9.802,12.462)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,8.577,12.462)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,7.352,1.246)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,8.577,1.246)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,9.802,1.246)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,11.028,1.246)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,12.253,1.246)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.225,
      top: 13.708,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.225,
      top: 14.955,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.379,
      top: 13.708,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.379,
      top: 14.955,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.45,
      top: 16.201,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.676,
      top: 17.447,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,15.929,16.201)",
      transformOrigin: "0 0",
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.154,
      top: 16.201,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.929,
      top: 17.447,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,6.126,16.201)",
      transformOrigin: "0 0",
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.901,
      top: 18.693,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.126,
      top: 18.693,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,14.703,14.955)",
      transformOrigin: "0 0",
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.478,
      top: 18.693,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,7.352,14.955)",
      transformOrigin: "0 0",
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.704,
      top: 18.693,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.901,
      top: 1.246,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.126,
      top: 1.246,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.478,
      top: 1.246,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.704,
      top: 1.246,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20.831,
      height: 21.186,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.500,
    height: 19,
    viewBox: "0 0 19.500 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.5,
      top: 1,
      width: 19.5,
      height: 19,
      color: "rgb(255,255,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.5 5 L 0 7.5 L 0.5 12.5 L 5 18.5 L 6 18.5 L 7 19 L 12.5 19 L 13.5 18.5 L 15 18.5 L 18.5 14 L 19.5 12 L 19.5 7 L 18.5 6 L 18.5 4.5 L 15.5 1.5 L 12.5 0 L 7 0 L 1.5 4 L 1.5 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.451,
      top: 3.739,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.155,
      top: 3.739,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.676,
      top: 2.492,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.127,
      top: 7.477,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.352,
      top: 7.477,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.127,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.352,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.253,
      top: 7.477,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.478,
      top: 7.477,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.253,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.478,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.929,
      top: 2.492,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.225,
      top: 4.985,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.225,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.38,
      top: 4.985,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.38,
      top: 6.231,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 7.477,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 9.97,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 11.216,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 12.462,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 7.477,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 8.724,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 9.97,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 11.216,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.605,
      top: 12.462,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,7.352,21.186)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,8.578,21.186)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,9.803,21.186)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,11.028,21.186)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,12.253,21.186)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,7.352,16.201)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,8.577,16.201)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,9.802,16.201)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,11.028,16.201)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,12.253,16.201)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,7.352,1.246)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,8.577,1.246)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,9.802,1.246)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,11.028,1.246)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.246,
    height: 1.225,
    viewBox: "0 0 1.246 1.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,12.253,1.247)",
      transformOrigin: "0 0",
      width: 1.246,
      height: 1.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.246 0 L 0 0 L 0 1.225 L 1.246 1.225 L 1.246 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.225,
      top: 13.708,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.225,
      top: 14.955,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.38,
      top: 13.708,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.38,
      top: 14.955,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.451,
      top: 16.201,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.676,
      top: 17.447,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.901,
      top: 12.462,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.155,
      top: 16.201,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.929,
      top: 17.447,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.704,
      top: 12.462,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.901,
      top: 18.693,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.127,
      top: 18.693,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.127,
      top: 13.708,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.478,
      top: 18.693,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.478,
      top: 13.708,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.704,
      top: 18.693,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.901,
      top: 1.246,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.127,
      top: 1.246,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.478,
      top: 1.246,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.225,
    height: 1.246,
    viewBox: "0 0 1.225 1.246",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.704,
      top: 1.246,
      width: 1.225,
      height: 1.246,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.225 0 L 0 0 L 0 1.246 L 1.225 1.246 L 1.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Property 1=Win
    "property1=win": __body0,
    // figma: Property 1=Lose
    "property1=lose": __body1,
    // figma: Property 1=Standard
    "property1=standard": __body2
  };
  return (__impls[__vkey_Emoji(props)] ?? __body1)();
}

// figma node: 3:2176 Horizontal Slider (3 variants)
const __venc_HorizontalSlider = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_HorizontalSlider = p => "position=" + __venc_HorizontalSlider(p.position);
function HorizontalSlider(_p = {}) {
  const props = {
    ..._p,
    position: _p.position ?? "center"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 201,
      height: 21,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(184,192,193)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 3,
      backgroundColor: "rgb(0,0,0)",
      boxShadow: "inset 1px 1px 0px 0px rgb(184,184,184), 0px 1px 0px 0px rgb(255,255,255), inset -1px -1px 0px 0px rgb(117,117,117), inset 0px 1px 0px 0px rgb(159,159,159)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 11,
    height: 21,
    viewBox: "0 0 11 21",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11,
      height: 21
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11 0 L 0 0 L 0 16 L 1 16 L 1 17 L 2 17 L 2 18 L 3 18 L 3 19 L 4 19 L 4 20 L 5 20 L 5 21 L 6 21 L 6 20 L 7 20 L 7 19 L 8 19 L 8 18 L 9 18 L 9 17 L 10 17 L 10 16 L 11 16 L 11 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 201,
      height: 21,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(184,192,193)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 3,
      backgroundColor: "rgb(0,0,0)",
      boxShadow: "inset 1px 1px 0px 0px rgb(184,184,184), 0px 1px 0px 0px rgb(255,255,255), inset -1px -1px 0px 0px rgb(117,117,117), inset 0px 1px 0px 0px rgb(159,159,159)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 11,
    height: 21,
    viewBox: "0 0 11 21",
    fill: "none",
    style: {
      position: "absolute",
      left: 95,
      top: 0,
      width: 11,
      height: 21
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11 0 L 0 0 L 0 16 L 1 16 L 1 17 L 2 17 L 2 18 L 3 18 L 3 19 L 4 19 L 4 20 L 5 20 L 5 21 L 6 21 L 6 20 L 7 20 L 7 19 L 8 19 L 8 18 L 9 18 L 9 17 L 10 17 L 10 16 L 11 16 L 11 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 201,
      height: 21,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(184,192,193)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 3,
      backgroundColor: "rgb(0,0,0)",
      boxShadow: "inset 1px 1px 0px 0px rgb(184,184,184), 0px 1px 0px 0px rgb(255,255,255), inset -1px -1px 0px 0px rgb(117,117,117), inset 0px 1px 0px 0px rgb(159,159,159)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 11,
    height: 21,
    viewBox: "0 0 11 21",
    fill: "none",
    style: {
      position: "absolute",
      left: 190,
      top: 0,
      width: 11,
      height: 21
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11 0 L 0 0 L 0 16 L 1 16 L 1 17 L 2 17 L 2 18 L 3 18 L 3 19 L 4 19 L 4 20 L 5 20 L 5 21 L 6 21 L 6 20 L 7 20 L 7 19 L 8 19 L 8 18 L 9 18 L 9 17 L 10 17 L 10 16 L 11 16 L 11 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Position=Left
    "position=left": __body0,
    // figma: Position=Center
    "position=center": __body1,
    // figma: Position=Right
    "position=right": __body2
  };
  return (__impls[__vkey_HorizontalSlider(props)] ?? __body1)();
}

// figma node: 54:9593 Minesweeper/
function Minesweeper(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "rgb(252,13,27)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.828,
    height: 9.414,
    viewBox: "0 0 9.828 9.414",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 9.828,
      height: 9.414
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.328 4.5 L 9.414 1.414 L 8 0 L 4.914 3.086 L 1.828 0 L 0.414 1.414 L 3.5 4.5 L 0 8 L 1.414 9.414 L 4.914 5.914 L 8.414 9.414 L 9.828 8 L 6.328 4.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 54:9096 Minesweeper/1
function Minesweeper13(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 5.709,
      height: 8.156,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.447,
      top: 0,
      width: 1.631,
      height: 6.525,
      backgroundColor: "rgb(11,36,251)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 6.525,
      width: 5.709,
      height: 1.631,
      backgroundColor: "rgb(11,36,251)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.631,
      top: 0.816,
      width: 1.631,
      height: 5.709,
      backgroundColor: "rgb(11,36,251)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.816,
      top: 1.631,
      width: 1.631,
      height: 1.631,
      backgroundColor: "rgb(11,36,251)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2.447,
      width: 4.078,
      height: 0.816,
      backgroundColor: "rgb(11,36,251)"
    }
  })));
}

// figma node: 54:9095 Minesweeper/2
function Minesweeper2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8.156,
      height: 8.156,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.816,
      width: 8.156,
      height: 0.816,
      backgroundColor: "rgb(14,122,17)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.816,
      top: 0,
      width: 6.525,
      height: 0.816,
      backgroundColor: "rgb(14,122,17)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1.631,
      width: 2.447,
      height: 0.816,
      backgroundColor: "rgb(14,122,17)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.709,
      top: 1.631,
      width: 2.447,
      height: 1.631,
      backgroundColor: "rgb(14,122,17)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.078,
      top: 3.263,
      width: 3.263,
      height: 0.816,
      backgroundColor: "rgb(14,122,17)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.447,
      top: 4.078,
      width: 4.078,
      height: 0.816,
      backgroundColor: "rgb(14,122,17)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.816,
      top: 4.894,
      width: 4.078,
      height: 0.816,
      backgroundColor: "rgb(14,122,17)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 5.709,
      width: 3.263,
      height: 0.816,
      backgroundColor: "rgb(14,122,17)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 6.525,
      width: 8.156,
      height: 1.631,
      backgroundColor: "rgb(14,122,17)"
    }
  })));
}

// figma node: 54:9094 Minesweeper/3
function Minesweeper3(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 7.341,
      height: 8.156,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.525,
      height: 0.816,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 7.341,
      width: 6.525,
      height: 0.816,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.816,
      width: 7.341,
      height: 0.816,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 6.525,
      width: 7.341,
      height: 0.816,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.894,
      top: 1.631,
      width: 2.447,
      height: 1.631,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.894,
      top: 4.894,
      width: 2.447,
      height: 1.631,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.447,
      top: 3.263,
      width: 4.078,
      height: 1.631,
      backgroundColor: "rgb(252,13,27)"
    }
  })));
}

// figma node: 54:9093 Minesweeper/4
function Minesweeper4(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8.156,
      height: 8.156,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.631,
      top: 0,
      width: 2.447,
      height: 1.631,
      backgroundColor: "rgb(2,11,121)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.816,
      top: 1.631,
      width: 2.447,
      height: 1.631,
      backgroundColor: "rgb(2,11,121)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 3.263,
      width: 8.156,
      height: 1.631,
      backgroundColor: "rgb(2,11,121)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.894,
      top: 0,
      width: 2.447,
      height: 8.156,
      backgroundColor: "rgb(2,11,121)"
    }
  })));
}

// figma node: 54:9092 Minesweeper/5
function Minesweeper5(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8.156,
      height: 8.156,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.341,
      top: 4.078,
      width: 0.816,
      height: 3.263,
      backgroundColor: "rgb(133,33,35)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.156,
      height: 1.631,
      backgroundColor: "rgb(133,33,35)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1.631,
      width: 1.631,
      height: 1.631,
      backgroundColor: "rgb(133,33,35)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 3.263,
      width: 7.341,
      height: 1.631,
      backgroundColor: "rgb(133,33,35)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 6.525,
      width: 7.341,
      height: 1.631,
      backgroundColor: "rgb(133,33,35)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.709,
      top: 4.894,
      width: 1.631,
      height: 1.631,
      backgroundColor: "rgb(133,33,35)"
    }
  })));
}

// figma node: 54:9091 Minesweeper/6
function Minesweeper6(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8.156,
      height: 8.156,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.816,
      width: 0.816,
      height: 6.525,
      backgroundColor: "rgb(39,135,134)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.816,
      top: 0,
      width: 1.631,
      height: 8.156,
      backgroundColor: "rgb(39,135,134)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.816,
      top: 0,
      width: 6.525,
      height: 1.631,
      backgroundColor: "rgb(39,135,134)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.816,
      top: 3.263,
      width: 6.525,
      height: 1.631,
      backgroundColor: "rgb(39,135,134)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.816,
      top: 6.525,
      width: 6.525,
      height: 1.631,
      backgroundColor: "rgb(39,135,134)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.709,
      top: 4.894,
      width: 1.631,
      height: 1.631,
      backgroundColor: "rgb(39,135,134)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.341,
      top: 4.078,
      width: 0.816,
      height: 3.263,
      backgroundColor: "rgb(39,135,134)"
    }
  })));
}

// figma node: 54:9090 Minesweeper/7
function Minesweeper7(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8.156,
      height: 8.156,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.156,
      height: 1.631,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.709,
      top: 1.631,
      width: 2.447,
      height: 1.631,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.894,
      top: 3.263,
      width: 2.447,
      height: 1.631,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.078,
      top: 4.894,
      width: 2.447,
      height: 1.631,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.263,
      top: 6.525,
      width: 2.447,
      height: 1.631,
      backgroundColor: "rgb(0,0,0)"
    }
  })));
}

// figma node: 54:9089 Minesweeper/8
function Minesweeper8(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8.156,
      height: 8.156,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.816,
      width: 8.156,
      height: 0.816,
      backgroundColor: "rgb(135,135,135)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 6.525,
      width: 8.156,
      height: 0.816,
      backgroundColor: "rgb(135,135,135)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.816,
      top: 0,
      width: 6.525,
      height: 0.816,
      backgroundColor: "rgb(135,135,135)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.816,
      top: 7.341,
      width: 6.525,
      height: 0.816,
      backgroundColor: "rgb(135,135,135)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.816,
      top: 3.263,
      width: 6.525,
      height: 1.631,
      backgroundColor: "rgb(135,135,135)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1.631,
      width: 2.447,
      height: 1.631,
      backgroundColor: "rgb(135,135,135)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4.894,
      width: 2.447,
      height: 1.631,
      backgroundColor: "rgb(135,135,135)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.709,
      top: 1.631,
      width: 2.447,
      height: 1.631,
      backgroundColor: "rgb(135,135,135)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.709,
      top: 4.894,
      width: 2.447,
      height: 1.631,
      backgroundColor: "rgb(135,135,135)"
    }
  })));
}

// figma node: 54:9088 Minesweeper/Flag
function MinesweeperFlag(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 3,
      width: 7.325,
      height: 9.156,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.663,
      top: 0,
      width: 0.916,
      height: 8.699,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 7.325,
      width: 7.325,
      height: 1.831,
      backgroundColor: "rgb(1,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.831,
      top: 6.409,
      width: 3.663,
      height: 0.916,
      backgroundColor: "rgb(1,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.747,
      top: 0,
      width: 1.831,
      height: 4.578,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.916,
      top: 0.916,
      width: 1.831,
      height: 2.747,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1.831,
      width: 0.916,
      height: 0.916,
      backgroundColor: "rgb(252,13,27)"
    }
  })));
}

// figma node: 54:9086 Minesweeper/Mine
function MinesweeperMine(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 10.603,
      height: 10.603,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.894,
      top: 0,
      width: 0.816,
      height: 10.603,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,10.603,4.894)",
      transformOrigin: "0 0",
      width: 0.816,
      height: 10.603,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.263,
      top: 1.631,
      width: 4.078,
      height: 7.341,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,8.972,3.263)",
      transformOrigin: "0 0",
      width: 4.078,
      height: 7.341,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.447,
      top: 2.447,
      width: 5.709,
      height: 5.709,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.156,
      top: 1.631,
      width: 0.816,
      height: 0.816,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.156,
      top: 8.156,
      width: 0.816,
      height: 0.816,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.631,
      top: 1.631,
      width: 0.816,
      height: 0.816,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.631,
      top: 8.156,
      width: 0.816,
      height: 0.816,
      backgroundColor: "rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.263,
      top: 3.263,
      width: 1.631,
      height: 1.631,
      backgroundColor: "rgb(255,255,255)"
    }
  })));
}

// figma node: 54:9388 Interactive Pieces (17 variants)
const __venc_InteractivePieces = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_InteractivePieces = p => "type=" + __venc_InteractivePieces(p.type);
function InteractivePieces(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128)",
      position: "relative",
      ...props.style
    }
  });
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(MinesweeperFlag, null)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(255,255,255), inset 1px 1px 0px 0px rgb(10,10,10), inset -2px -2px 0px 0px rgb(223,223,223)",
      position: "relative",
      ...props.style
    }
  });
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(255,255,255), inset 1px 1px 0px 0px rgb(10,10,10), inset -2px -2px 0px 0px rgb(223,223,223)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(MinesweeperFlag, null)));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "-1px",
      position: "relative",
      ...props.style
    }
  });
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "-1px",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(MinesweeperFlag, null)));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(252,13,27)",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "-1px",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(MinesweeperMine, null)));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "-1px",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Minesweeper, null)));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "-1px",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(MinesweeperMine, null)));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "-1px",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Minesweeper13, null)));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "-1px",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Minesweeper2, null)));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "-1px",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Minesweeper3, null)));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "-1px",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Minesweeper4, null)));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "-1px",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Minesweeper5, null)));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "-1px",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Minesweeper6, null)));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "-1px",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Minesweeper7, null)));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(192,192,192)",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "-1px",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Minesweeper8, null)));
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Flag Mark
    "type=flag mark": __body1,
    // figma: Type=Pressing
    "type=pressing": __body2,
    // figma: Type=Flag Pressing
    "type=flag pressing": __body3,
    // figma: Type=Null
    "type=null": __body4,
    // figma: Type=Flag Pressed
    "type=flag pressed": __body5,
    // figma: Type=Mine Pressed
    "type=mine pressed": __body6,
    // figma: Type=X
    "type=x": __body7,
    // figma: Type=Mine
    "type=mine": __body8,
    // figma: Type=1
    "type=1": __body9,
    // figma: Type=2
    "type=2": __body10,
    // figma: Type=3
    "type=3": __body11,
    // figma: Type=4
    "type=4": __body12,
    // figma: Type=5
    "type=5": __body13,
    // figma: Type=6
    "type=6": __body14,
    // figma: Type=7
    "type=7": __body15,
    // figma: Type=8
    "type=8": __body16
  };
  return (__impls[__vkey_InteractivePieces(props)] ?? __body0)();
}

// figma node: 3:1984 label (4 variants)
const __venc_Label = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Label = p => "type=" + __venc_Label(p.type);
function Label(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default",
    radioText: _p.radioText ?? "This is a radio button"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0.500px 3.961px 0.500px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10,
      height: 10,
      color: "rgb(128,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0 L 4 0 L 4 1 L 2 1 L 2 2 L 1 2 L 1 4 L 0 4 L 0 8 L 1 8 L 1 10 L 2 10 L 2 8 L 1 8 L 1 4 L 2 4 L 2 2 L 4 2 L 4 1 L 8 1 L 8 2 L 10 2 L 10 1 L 8 1 L 8 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 8,
    viewBox: "0 0 9 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 9,
      height: 8,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 L 3 0 L 3 1 L 1 1 L 1 3 L 0 3 L 0 7 L 1 7 L 1 8 L 2 8 L 2 7 L 1 7 L 1 3 L 2 3 L 2 2 L 3 2 L 3 1 L 7 1 L 7 2 L 9 2 L 9 1 L 7 1 L 7 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 8,
    viewBox: "0 0 9 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3,
      width: 9,
      height: 8,
      color: "rgb(223,223,223)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 L 8 0 L 8 1 L 7 1 L 7 0 Z M 8 5 L 8 1 L 9 1 L 9 5 L 8 5 Z M 6 7 L 6 6 L 7 6 L 7 5 L 8 5 L 8 7 L 6 7 Z M 2 7 L 2 8 L 6 8 L 6 7 L 2 7 Z M 2 7 L 2 6 L 0 6 L 0 7 L 2 7 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 10,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 L 8 0 L 8 2 L 9 2 L 9 6 L 8 6 L 8 8 L 6 8 L 6 9 L 2 9 L 2 8 L 0 8 L 0 9 L 2 9 L 2 10 L 6 10 L 6 9 L 8 9 L 8 8 L 9 8 L 9 6 L 10 6 L 10 2 L 9 2 L 9 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 8,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 6 0 L 6 1 L 7 1 L 7 2 L 8 2 L 8 6 L 7 6 L 7 7 L 6 7 L 6 8 L 2 8 L 2 7 L 1 7 L 1 6 L 0 6 L 0 2 L 1 2 L 1 1 L 2 1 L 2 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(34,34,34)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.radioText));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0.500px 6.930px 0.500px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10,
      height: 10,
      color: "rgb(128,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0 L 4 0 L 4 1 L 2 1 L 2 2 L 1 2 L 1 4 L 0 4 L 0 8 L 1 8 L 1 10 L 2 10 L 2 8 L 1 8 L 1 4 L 2 4 L 2 2 L 4 2 L 4 1 L 8 1 L 8 2 L 10 2 L 10 1 L 8 1 L 8 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 8,
    viewBox: "0 0 9 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 9,
      height: 8,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 L 3 0 L 3 1 L 1 1 L 1 3 L 0 3 L 0 7 L 1 7 L 1 8 L 2 8 L 2 7 L 1 7 L 1 3 L 2 3 L 2 2 L 3 2 L 3 1 L 7 1 L 7 2 L 9 2 L 9 1 L 7 1 L 7 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 8,
    viewBox: "0 0 9 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3,
      width: 9,
      height: 8,
      color: "rgb(223,223,223)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 L 8 0 L 8 1 L 7 1 L 7 0 Z M 8 5 L 8 1 L 9 1 L 9 5 L 8 5 Z M 6 7 L 6 6 L 7 6 L 7 5 L 8 5 L 8 7 L 6 7 Z M 2 7 L 2 8 L 6 8 L 6 7 L 2 7 Z M 2 7 L 2 6 L 0 6 L 0 7 L 2 7 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 10,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 L 8 0 L 8 2 L 9 2 L 9 6 L 8 6 L 8 8 L 6 8 L 6 9 L 2 9 L 2 8 L 0 8 L 0 9 L 2 9 L 2 10 L 6 10 L 6 9 L 8 9 L 8 8 L 9 8 L 9 6 L 10 6 L 10 2 L 9 2 L 9 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 8,
      height: 8,
      color: "rgb(192,192,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 6 0 L 6 1 L 7 1 L 7 2 L 8 2 L 8 6 L 7 6 L 7 7 L 6 7 L 6 8 L 2 8 L 2 7 L 1 7 L 1 6 L 0 6 L 0 2 L 1 2 L 1 1 L 2 1 L 2 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 4,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4,
      height: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 4,
    viewBox: "0 0 4 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4,
      height: 4,
      color: "rgb(128,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 1 0 L 1 1 L 0 1 L 0 3 L 1 3 L 1 4 L 3 4 L 3 3 L 4 3 L 4 1 L 3 1 L 3 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(128,128,128)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.radioText));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0.500px 2.961px 0.500px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10,
      height: 10,
      color: "rgb(128,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0 L 4 0 L 4 1 L 2 1 L 2 2 L 1 2 L 1 4 L 0 4 L 0 8 L 1 8 L 1 10 L 2 10 L 2 8 L 1 8 L 1 4 L 2 4 L 2 2 L 4 2 L 4 1 L 8 1 L 8 2 L 10 2 L 10 1 L 8 1 L 8 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 8,
    viewBox: "0 0 9 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 9,
      height: 8,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 L 3 0 L 3 1 L 1 1 L 1 3 L 0 3 L 0 7 L 1 7 L 1 8 L 2 8 L 2 7 L 1 7 L 1 3 L 2 3 L 2 2 L 3 2 L 3 1 L 7 1 L 7 2 L 9 2 L 9 1 L 7 1 L 7 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 8,
    viewBox: "0 0 9 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3,
      width: 9,
      height: 8,
      color: "rgb(223,223,223)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 L 8 0 L 8 1 L 7 1 L 7 0 Z M 8 5 L 8 1 L 9 1 L 9 5 L 8 5 Z M 6 7 L 6 6 L 7 6 L 7 5 L 8 5 L 8 7 L 6 7 Z M 2 7 L 2 8 L 6 8 L 6 7 L 2 7 Z M 2 7 L 2 6 L 0 6 L 0 7 L 2 7 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 10,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 L 8 0 L 8 2 L 9 2 L 9 6 L 8 6 L 8 8 L 6 8 L 6 9 L 2 9 L 2 8 L 0 8 L 0 9 L 2 9 L 2 10 L 6 10 L 6 9 L 8 9 L 8 8 L 9 8 L 9 6 L 10 6 L 10 2 L 9 2 L 9 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 8,
      height: 8,
      color: "rgb(192,192,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 6 0 L 6 1 L 7 1 L 7 2 L 8 2 L 8 6 L 7 6 L 7 7 L 6 7 L 6 8 L 2 8 L 2 7 L 1 7 L 1 6 L 0 6 L 0 2 L 1 2 L 1 1 L 2 1 L 2 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(128,128,128)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.radioText));
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Checked Disabled
    "type=checked disabled": __body1,
    // figma: Type=Checked
    "type=checked": __body1,
    // figma: Type=Disabled
    "type=disabled": __body2
  };
  return (__impls[__vkey_Label(props)] ?? __body0)();
}

// figma node: 19:42007 computer_explorer_cool-4
function ComputerExplorerCool4(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a7e6c3a1d992d672",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }));
}

// figma node: 103:4166 Main Tree List (2 variants)
const __venc_MainTreeList = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_MainTreeList = p => "property1=" + __venc_MainTreeList(p.property1);
function MainTreeList(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default",
    text: _p.text ?? "Computer",
    showIcon: _p.showIcon ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.showIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(ComputerExplorerCool4, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 1px 1px 1px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "11px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.showIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(ComputerExplorerCool4, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 1px 1px 1px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "11px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text)));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1
  };
  return (__impls[__vkey_MainTreeList(props)] ?? __body0)();
}

// figma node: 54:6162 Digit Centre / On
function DigitCentreOn(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 18,
      height: 6,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 18,
      height: 2,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 0,
      width: 14,
      height: 2,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 4,
      width: 14,
      height: 2,
      backgroundColor: "rgb(252,13,27)"
    }
  }));
}

// figma node: 54:6158 Digit Edge / On
function DigitEdgeOn(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 6,
      height: 18,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2,
      height: 18,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 2,
      height: 14,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 2,
      height: 10,
      backgroundColor: "rgb(252,13,27)"
    }
  }));
}

// figma node: 54:6150 Digit / 8
function Digit8(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 6,
      height: 18
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 22,
      width: 6,
      height: 18
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,20)",
      transformOrigin: "0 0"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,40)",
      transformOrigin: "0 0"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement(DigitEdgeOn, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,1,-1,0,20,0)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitEdgeOn, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,-1,1,0,2,42)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitCentreOn, {
    style: {
      position: "absolute",
      left: 2,
      top: 18,
      width: 18,
      height: 6
    }
  }));
}

// figma node: 54:6148 Digit / 0
function Digit0(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 42
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Digit8, null)));
}

// figma node: 54:6166 Digit Centre / Off
function DigitCentreOff(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 18,
      height: 6,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 2,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 2,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 2,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 0,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 0,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 0,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 4,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 4,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }));
}

// figma node: 54:6185 Digit Edge / Off
function DigitEdgeOff(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 6,
      height: 18,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 6,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 8,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 10,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 8,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 12,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 14,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 12,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 16,
      width: 2,
      height: 2,
      opacity: 0.5,
      backgroundColor: "rgb(252,13,27)"
    }
  }));
}

// figma node: 54:6177 Digit / 1
function Digit1(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 6,
      height: 18
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DigitEdgeOff, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 22,
      width: 6,
      height: 18
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(DigitEdgeOff, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,20)",
      transformOrigin: "0 0"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,40)",
      transformOrigin: "0 0"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement(DigitEdgeOff, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,1,-1,0,20,0)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitEdgeOff, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,-1,1,0,2,42)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitCentreOff, {
    style: {
      position: "absolute",
      left: 2,
      top: 18,
      width: 18,
      height: 6
    }
  }));
}

// figma node: 54:6198 Digit / 2
function Digit2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 6,
      height: 18
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DigitEdgeOff, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 22,
      width: 6,
      height: 18
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,20)",
      transformOrigin: "0 0"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,40)",
      transformOrigin: "0 0"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DigitEdgeOff, null)), /*#__PURE__*/React.createElement(DigitEdgeOn, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,1,-1,0,20,0)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitEdgeOn, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,-1,1,0,2,42)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitCentreOn, {
    style: {
      position: "absolute",
      left: 2,
      top: 18,
      width: 18,
      height: 6
    }
  }));
}

// figma node: 54:6206 Digit / 3
function Digit3(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 6,
      height: 18
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DigitEdgeOff, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 22,
      width: 6,
      height: 18
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(DigitEdgeOff, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,20)",
      transformOrigin: "0 0"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,40)",
      transformOrigin: "0 0"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement(DigitEdgeOn, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,1,-1,0,20,0)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitEdgeOn, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,-1,1,0,2,42)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitCentreOn, {
    style: {
      position: "absolute",
      left: 2,
      top: 18,
      width: 18,
      height: 6
    }
  }));
}

// figma node: 54:6214 Digit / 4
function Digit4(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 6,
      height: 18
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 22,
      width: 6,
      height: 18
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(DigitEdgeOff, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,20)",
      transformOrigin: "0 0"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,40)",
      transformOrigin: "0 0"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement(DigitEdgeOff, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,1,-1,0,20,0)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitEdgeOff, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,-1,1,0,2,42)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitCentreOn, {
    style: {
      position: "absolute",
      left: 2,
      top: 18,
      width: 18,
      height: 6
    }
  }));
}

// figma node: 54:6222 Digit / 5
function Digit5(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 6,
      height: 18
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 22,
      width: 6,
      height: 18
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(DigitEdgeOff, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,20)",
      transformOrigin: "0 0"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DigitEdgeOff, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,40)",
      transformOrigin: "0 0"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement(DigitEdgeOn, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,1,-1,0,20,0)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitEdgeOn, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,-1,1,0,2,42)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitCentreOn, {
    style: {
      position: "absolute",
      left: 2,
      top: 18,
      width: 18,
      height: 6
    }
  }));
}

// figma node: 54:6230 Digit / 6
function Digit6(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 6,
      height: 18
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 22,
      width: 6,
      height: 18
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,20)",
      transformOrigin: "0 0"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DigitEdgeOff, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,40)",
      transformOrigin: "0 0"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement(DigitEdgeOn, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,1,-1,0,20,0)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitEdgeOn, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,-1,1,0,2,42)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitCentreOn, {
    style: {
      position: "absolute",
      left: 2,
      top: 18,
      width: 18,
      height: 6
    }
  }));
}

// figma node: 54:6238 Digit / 7
function Digit7(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 6,
      height: 18
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DigitEdgeOff, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 22,
      width: 6,
      height: 18
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(DigitEdgeOff, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,20)",
      transformOrigin: "0 0"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,40)",
      transformOrigin: "0 0"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement(DigitEdgeOn, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,1,-1,0,20,0)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitEdgeOff, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,-1,1,0,2,42)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitCentreOff, {
    style: {
      position: "absolute",
      left: 2,
      top: 18,
      width: 18,
      height: 6
    }
  }));
}

// figma node: 54:6246 Digit / 9
function Digit9(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 6,
      height: 18
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 22,
      width: 6,
      height: 18
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(DigitEdgeOff, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,20)",
      transformOrigin: "0 0"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(-1,0,0,-1,22,40)",
      transformOrigin: "0 0"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DigitEdgeOn, null)), /*#__PURE__*/React.createElement(DigitEdgeOn, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,1,-1,0,20,0)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitEdgeOn, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 18,
      transform: "matrix(0,-1,1,0,2,42)",
      transformOrigin: "0 0"
    }
  }), /*#__PURE__*/React.createElement(DigitCentreOn, {
    style: {
      position: "absolute",
      left: 2,
      top: 18,
      width: 18,
      height: 6
    }
  }));
}

// figma node: 54:6254 Numbers (10 variants)
const __venc_Numbers = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Numbers = p => "property1=" + __venc_Numbers(p.property1);
function Numbers(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "0"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 42
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Digit0, null)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 42
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Digit1, null)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 42
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Digit2, null)));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 42
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Digit3, null)));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 42
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Digit4, null)));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 42
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Digit5, null)));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 42
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Digit6, null)));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 42
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Digit7, null)));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 42
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Digit8, null)));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 42,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 42
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Digit9, null)));
  const __impls = {
    // figma: Property 1=0
    "property1=0": __body0,
    // figma: Property 1=1
    "property1=1": __body1,
    // figma: Property 1=2
    "property1=2": __body2,
    // figma: Property 1=3
    "property1=3": __body3,
    // figma: Property 1=4
    "property1=4": __body4,
    // figma: Property 1=5
    "property1=5": __body5,
    // figma: Property 1=6
    "property1=6": __body6,
    // figma: Property 1=7
    "property1=7": __body7,
    // figma: Property 1=8
    "property1=8": __body8,
    // figma: Property 1=9
    "property1=9": __body9
  };
  return (__impls[__vkey_Numbers(props)] ?? __body0)();
}

// figma node: 50:5516 magnifier
function Magnifier(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-670f342bdb5e7d0d",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20
    }
  }));
}

// figma node: 50:5571 Paint button (2 variants)
const __venc_PaintButton = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_PaintButton = p => "type=" + __venc_PaintButton(p.type);
function PaintButton(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "pressed"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 22,
      backgroundColor: "rgb(223,223,223)",
      boxShadow: "inset -1px -1px 0px 0px rgb(255,255,255), inset 1px 1px 0px 0px rgb(10,10,10), inset -2px -2px 0px 0px rgb(223,223,223), inset 2px 2px 0px 0px rgb(128,128,128)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Magnifier, null)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 22,
      height: 22,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Magnifier, null)));
  const __impls = {
    // figma: Type=Pressed
    "type=pressed": __body0,
    // figma: Type=Neutral
    "type=neutral": __body1
  };
  return (__impls[__vkey_PaintButton(props)] ?? __body0)();
}

// figma node: 112:5819 Player Icons (7 variants)
const __venc_PlayerIcons = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_PlayerIcons = p => "button=" + __venc_PlayerIcons(p.button);
function PlayerIcons(_p = {}) {
  const props = {
    ..._p,
    button: _p.button ?? "<<"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 9.77,
      height: 8.79,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.770,
    height: 8.800,
    viewBox: "0 0 9.770 8.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.77,
      height: 8.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.98 0 L 0 0 L 0 0.98 L 0 1.95 L 0 1.96 L 0 2.93 L 0 3.91 L 0 4.89 L 0 5.86 L 0 5.87 L 0 6.84 L 0 7.82 L 0 8.8 L 0.98 8.8 L 1.96 8.8 L 1.96 7.82 L 2.93 7.82 L 3.91 7.82 L 3.91 6.84 L 4.89 6.84 L 5.87 6.84 L 5.87 5.87 L 6.84 5.87 L 7.82 5.87 L 7.82 4.89 L 8.79 4.89 L 8.8 4.89 L 9.77 4.89 L 9.77 3.91 L 8.8 3.91 L 8.79 3.91 L 7.82 3.91 L 7.82 2.93 L 6.84 2.93 L 5.87 2.93 L 5.87 1.95 L 4.89 1.95 L 3.91 1.95 L 3.91 0.98 L 2.93 0.98 L 1.96 0.98 L 1.96 0 L 0.98 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 11.73,
      height: 10.75,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.730,
    height: 10.750,
    viewBox: "0 0 11.730 10.750",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.73,
      height: 10.75
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.98 0 L 1.96 0 L 1.96 0.98 L 1.96 1.95 L 1.96 1.96 L 1.96 2.93 L 1.96 3.91 L 1.96 4.89 L 2.93 4.89 L 2.93 3.91 L 3.91 3.91 L 3.91 2.93 L 4.89 2.93 L 4.89 1.95 L 5.86 1.95 L 5.86 0.98 L 6.84 0.98 L 6.84 1.95 L 6.84 1.96 L 6.84 2.93 L 6.84 3.91 L 6.84 4.89 L 7.82 4.89 L 7.82 3.91 L 8.79 3.91 L 8.79 2.93 L 9.77 2.93 L 9.77 1.95 L 10.75 1.95 L 10.75 0.98 L 11.73 0.98 L 11.73 1.95 L 11.73 1.96 L 11.73 2.93 L 11.73 3.91 L 11.73 4.89 L 11.73 5.86 L 11.73 5.87 L 11.73 6.84 L 11.73 7.82 L 11.73 8.79 L 11.73 8.8 L 11.73 9.77 L 10.75 9.77 L 10.75 8.8 L 9.77 8.8 L 9.77 7.82 L 8.79 7.82 L 8.79 6.84 L 7.82 6.84 L 7.82 5.87 L 6.84 5.87 L 6.84 6.84 L 6.84 7.82 L 6.84 8.79 L 6.84 8.8 L 6.84 9.77 L 5.86 9.77 L 5.86 8.8 L 4.89 8.8 L 4.89 7.82 L 3.91 7.82 L 3.91 6.84 L 2.93 6.84 L 2.93 5.87 L 1.96 5.87 L 1.96 6.84 L 1.96 7.82 L 1.96 8.79 L 1.96 8.8 L 1.96 9.77 L 1.96 10.75 L 0.98 10.75 L 0 10.75 L 0 9.77 L 0 8.8 L 0 8.79 L 0 7.82 L 0 6.84 L 0 5.87 L 0 5.86 L 0 4.89 L 0 3.91 L 0 2.93 L 0 1.96 L 0 1.95 L 0 0.98 L 0 0 L 0.98 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 11.73,
      height: 10.75,
      position: "relative",
      color: "rgb(34,34,34)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.730,
    height: 10.750,
    viewBox: "0 0 11.730 10.750",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.73,
      height: 10.75
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.98 0 L 1.96 0 L 1.96 0.98 L 1.96 1.95 L 1.96 1.96 L 1.96 2.93 L 1.96 3.91 L 1.96 4.89 L 2.93 4.89 L 2.93 3.91 L 3.91 3.91 L 3.91 2.93 L 4.89 2.93 L 4.89 1.95 L 5.86 1.95 L 5.86 0.98 L 6.84 0.98 L 6.84 1.95 L 6.84 1.96 L 6.84 2.93 L 6.84 3.91 L 6.84 4.89 L 7.82 4.89 L 7.82 3.91 L 8.79 3.91 L 8.79 2.93 L 9.77 2.93 L 9.77 1.95 L 10.75 1.95 L 10.75 0.98 L 11.73 0.98 L 11.73 1.95 L 11.73 1.96 L 11.73 2.93 L 11.73 3.91 L 11.73 4.89 L 11.73 5.86 L 11.73 5.87 L 11.73 6.84 L 11.73 7.82 L 11.73 8.79 L 11.73 8.8 L 11.73 9.77 L 10.75 9.77 L 10.75 8.8 L 9.77 8.8 L 9.77 7.82 L 8.79 7.82 L 8.79 6.84 L 7.82 6.84 L 7.82 5.87 L 6.84 5.87 L 6.84 6.84 L 6.84 7.82 L 6.84 8.79 L 6.84 8.8 L 6.84 9.77 L 5.86 9.77 L 5.86 8.8 L 4.89 8.8 L 4.89 7.82 L 3.91 7.82 L 3.91 6.84 L 2.93 6.84 L 2.93 5.87 L 1.96 5.87 L 1.96 6.84 L 1.96 7.82 L 1.96 8.79 L 1.96 8.8 L 1.96 9.77 L 1.96 10.75 L 0.98 10.75 L 0 10.75 L 0 9.77 L 0 8.8 L 0 8.79 L 0 7.82 L 0 6.84 L 0 5.87 L 0 5.86 L 0 4.89 L 0 3.91 L 0 2.93 L 0 1.96 L 0 1.95 L 0 0.98 L 0 0 L 0.98 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 10,
      height: 11,
      overflow: "hidden",
      position: "relative",
      color: "rgb(34,34,34)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.730,
    height: 10.750,
    viewBox: "0 0 11.730 10.750",
    fill: "none",
    style: {
      position: "absolute",
      left: -2,
      top: 0,
      width: 11.73,
      height: 10.75
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.98 0 L 1.96 0 L 1.96 0.98 L 1.96 0.98 L 1.96 1.95 L 1.96 1.96 L 1.96 2.93 L 1.96 2.93 L 1.96 3.91 L 1.96 3.91 L 1.96 4.89 L 0.98 4.89 L 0.98 4.89 L 0 4.89 L 0 3.91 L 0 3.91 L 0 2.93 L 0 2.93 L 0 1.96 L 0 1.95 L 0 0.98 L 0 0.98 L 0 0 L 0.98 0 L 0.98 0 Z M 0.98 4.89 L 0 4.89 L 0 5.86 L 0 5.87 L 0 6.84 L 0.98 6.84 L 0.98 6.84 L 1.96 6.84 L 1.96 5.87 L 2.93 5.87 L 2.93 6.84 L 3.91 6.84 L 3.91 6.84 L 4.89 6.84 L 4.89 6.84 L 5.86 6.84 L 5.87 6.84 L 6.84 6.84 L 6.84 5.87 L 7.82 5.87 L 7.82 6.84 L 8.79 6.84 L 8.8 6.84 L 9.77 6.84 L 9.77 6.84 L 10.75 6.84 L 10.75 6.84 L 11.73 6.84 L 11.73 5.87 L 11.73 5.86 L 11.73 4.89 L 10.75 4.89 L 10.75 4.89 L 9.77 4.89 L 9.77 4.89 L 8.8 4.89 L 8.79 4.89 L 7.82 4.89 L 7.82 4.89 L 6.84 4.89 L 6.84 4.89 L 5.87 4.89 L 5.86 4.89 L 4.89 4.89 L 4.89 4.89 L 3.91 4.89 L 3.91 4.89 L 2.93 4.89 L 2.93 4.89 L 1.96 4.89 L 1.95 4.89 L 0.98 4.89 L 0.98 4.89 Z M 0.98 9.77 L 1.96 9.77 L 1.96 10.75 L 0.98 10.75 L 0.98 10.75 L 0 10.75 L 0 9.77 L 0.98 9.77 L 0.98 9.77 Z M 0.98 6.84 L 1.96 6.84 L 1.96 7.82 L 1.96 7.82 L 1.96 8.79 L 1.96 8.8 L 1.96 9.77 L 0.98 9.77 L 0.98 9.77 L 0 9.77 L 0 8.8 L 0 8.79 L 0 7.82 L 0 7.82 L 0 6.84 L 0.98 6.84 L 0.98 6.84 Z M 2.93 3.91 L 3.91 3.91 L 3.91 2.93 L 4.89 2.93 L 4.89 1.95 L 5.86 1.95 L 5.86 0.98 L 6.84 0.98 L 6.84 1.95 L 6.84 1.96 L 6.84 2.93 L 6.84 2.93 L 6.84 3.91 L 6.84 3.91 L 6.84 4.89 L 5.87 4.89 L 5.86 4.89 L 4.89 4.89 L 4.89 4.89 L 3.91 4.89 L 3.91 4.89 L 2.93 4.89 L 2.93 3.91 Z M 3.91 6.84 L 4.89 6.84 L 4.89 6.84 L 5.86 6.84 L 5.87 6.84 L 6.84 6.84 L 6.84 7.82 L 6.84 7.82 L 6.84 8.79 L 6.84 8.8 L 6.84 9.77 L 5.86 9.77 L 5.86 8.8 L 4.89 8.8 L 4.89 7.82 L 3.91 7.82 L 3.91 6.84 Z M 8.79 3.91 L 7.82 3.91 L 7.82 4.89 L 8.79 4.89 L 8.8 4.89 L 9.77 4.89 L 9.77 4.89 L 10.75 4.89 L 10.75 4.89 L 11.73 4.89 L 11.73 3.91 L 11.73 3.91 L 11.73 2.93 L 11.73 2.93 L 11.73 1.96 L 11.73 1.95 L 11.73 0.98 L 10.75 0.98 L 10.75 1.95 L 9.77 1.95 L 9.77 2.93 L 8.79 2.93 L 8.79 3.91 Z M 9.77 6.84 L 8.79 6.84 L 8.79 7.82 L 9.77 7.82 L 9.77 8.8 L 10.75 8.8 L 10.75 9.77 L 11.73 9.77 L 11.73 8.8 L 11.73 8.79 L 11.73 7.82 L 11.73 7.82 L 11.73 6.84 L 10.75 6.84 L 10.75 6.84 L 9.77 6.84 L 9.77 6.84 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 7.82,
      height: 8.8,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.820,
    height: 8.800,
    viewBox: "0 0 7.820 8.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.82,
      height: 8.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.95 0 L 0.98 0 L 0 0 L 0 0.98 L 0 1.95 L 0 1.96 L 0 2.93 L 0 3.91 L 0 4.89 L 0 5.86 L 0 5.87 L 0 6.84 L 0 7.82 L 0 8.8 L 0.98 8.8 L 1.95 8.8 L 1.96 8.8 L 2.93 8.8 L 3.91 8.8 L 4.89 8.8 L 5.86 8.8 L 5.87 8.8 L 6.84 8.8 L 7.82 8.8 L 7.82 7.82 L 7.82 6.84 L 7.82 5.87 L 7.82 5.86 L 7.82 4.89 L 7.82 3.91 L 7.82 2.93 L 7.82 1.96 L 7.82 1.95 L 7.82 0.98 L 7.82 0 L 6.84 0 L 5.87 0 L 5.86 0 L 4.89 0 L 3.91 0 L 2.93 0 L 1.96 0 L 1.95 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 7.82,
      height: 8.8,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.820,
    height: 8.800,
    viewBox: "0 0 7.820 8.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.82,
      height: 8.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.86 0 L 4.89 0 L 4.89 0.98 L 4.89 1.95 L 4.89 1.96 L 4.89 2.93 L 4.89 3.91 L 4.89 4.89 L 4.89 5.86 L 4.89 5.87 L 4.89 6.84 L 4.89 7.82 L 4.89 8.8 L 5.86 8.8 L 5.87 8.8 L 6.84 8.8 L 7.82 8.8 L 7.82 7.82 L 7.82 6.84 L 7.82 5.87 L 7.82 5.86 L 7.82 4.89 L 7.82 3.91 L 7.82 2.93 L 7.82 1.96 L 7.82 1.95 L 7.82 0.98 L 7.82 0 L 6.84 0 L 5.87 0 L 5.86 0 Z M 0.98 8.8 L 0 8.8 L 0 7.82 L 0 6.84 L 0 5.87 L 0 5.86 L 0 4.89 L 0 3.91 L 0 2.93 L 0 1.96 L 0 1.95 L 0 0.98 L 0 0 L 0.98 0 L 1.95 0 L 1.96 0 L 2.93 0 L 2.93 0.98 L 2.93 1.95 L 2.93 1.96 L 2.93 2.93 L 2.93 3.91 L 2.93 4.89 L 2.93 5.86 L 2.93 5.87 L 2.93 6.84 L 2.93 7.82 L 2.93 8.8 L 1.96 8.8 L 1.95 8.8 L 0.98 8.8 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Button=play
    "button=play": __body0,
    // figma: Button=|<<
    "button=%7C<<": __body1,
    // figma: Button=>>|
    "button=>>%7C": __body2,
    // figma: Button=<<
    "button=<<": __body3,
    // figma: Button=>>
    "button=>>": __body3,
    // figma: Button=stop
    "button=stop": __body4,
    // figma: Button=pause
    "button=pause": __body5
  };
  return (__impls[__vkey_PlayerIcons(props)] ?? __body3)();
}

// figma node: 14:903 Scrolls (2 variants)
const __venc_Scrolls = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Scrolls = p => "orientation=" + __venc_Scrolls(p.orientation);
function Scrolls(_p = {}) {
  const props = {
    ..._p,
    orientation: _p.orientation ?? "horizontal"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 16,
    viewBox: "0 0 15 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 16,
      color: "rgb(223,223,223)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 0 L 0 0 L 0 16 L 1 16 L 1 1 L 15 1 L 15 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 14,
    viewBox: "0 0 13 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 13,
      height: 14,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 0 0 L 0 14 L 1 14 L 1 1 L 13 1 L 13 0 L 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 17,
    viewBox: "0 0 16 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 17,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 17 L 0 17 L 0 16 L 15 16 L 15 0 L 16 0 L 16 17 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 15,
    viewBox: "0 0 14 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 15,
      color: "rgb(128,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 0 L 13 0 L 13 14 L 0 14 L 0 15 L 14 15 L 14 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 13,
    viewBox: "0 0 12 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 12,
      height: 13,
      color: "rgb(192,192,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 12 0 L 12 13 L 0 13 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,14,15)",
      transformOrigin: "0 0",
      width: 12,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 4,
    viewBox: "0 0 7 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,4,10)",
      transformOrigin: "0 0",
      width: 7,
      height: 4,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 L 0 0 L 0 1 L 1 1 L 1 2 L 2 2 L 2 3 L 3 3 L 3 4 L 4 4 L 4 3 L 5 3 L 5 2 L 6 2 L 6 1 L 7 1 L 7 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 66,
      backgroundColor: "rgb(217,217,217)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 45,
      backgroundColor: "rgb(184,192,193)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 16,
    viewBox: "0 0 15 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 16,
      color: "rgb(223,223,223)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 0 L 0 0 L 0 16 L 1 16 L 1 1 L 15 1 L 15 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 14,
    viewBox: "0 0 13 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 13,
      height: 14,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 0 0 L 0 14 L 1 14 L 1 1 L 13 1 L 13 0 L 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 17,
    viewBox: "0 0 16 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 17,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 17 L 0 17 L 0 16 L 15 16 L 15 0 L 16 0 L 16 17 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 15,
    viewBox: "0 0 14 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 15,
      color: "rgb(128,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 0 L 13 0 L 13 14 L 0 14 L 0 15 L 14 15 L 14 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 13,
    viewBox: "0 0 12 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 12,
      height: 13,
      color: "rgb(192,192,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 12 0 L 12 13 L 0 13 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 12,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 4,
    viewBox: "0 0 7 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,4,10)",
      transformOrigin: "0 0",
      width: 7,
      height: 4,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 L 0 0 L 0 1 L 1 1 L 1 2 L 2 2 L 2 3 L 3 3 L 3 4 L 4 4 L 4 3 L 5 3 L 5 2 L 6 2 L 6 1 L 7 1 L 7 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 125,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 17,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 16,
    viewBox: "0 0 15 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 16,
      color: "rgb(223,223,223)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 0 L 0 0 L 0 16 L 1 16 L 1 1 L 15 1 L 15 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 14,
    viewBox: "0 0 13 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 13,
      height: 14,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 0 0 L 0 14 L 1 14 L 1 1 L 13 1 L 13 0 L 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 17,
    viewBox: "0 0 16 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 17,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 17 L 0 17 L 0 16 L 15 16 L 15 0 L 16 0 L 16 17 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 15,
    viewBox: "0 0 14 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 15,
      color: "rgb(128,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 0 L 13 0 L 13 14 L 0 14 L 0 15 L 14 15 L 14 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 13,
    viewBox: "0 0 12 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 12,
      height: 13,
      color: "rgb(192,192,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 12 0 L 12 13 L 0 13 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,1.500,14.500)",
      transformOrigin: "0 0",
      width: 12,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 4,
    viewBox: "0 0 7 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,4,10)",
      transformOrigin: "0 0",
      width: 7,
      height: 4,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 L 0 0 L 0 1 L 1 1 L 1 2 L 2 2 L 2 3 L 3 3 L 3 4 L 4 4 L 4 3 L 5 3 L 5 2 L 6 2 L 6 1 L 7 1 L 7 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(184,192,193)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(223,223,223)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 17,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 16,
    viewBox: "0 0 15 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 16,
      color: "rgb(223,223,223)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 0 L 0 0 L 0 16 L 1 16 L 1 1 L 15 1 L 15 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 14,
    viewBox: "0 0 13 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 13,
      height: 14,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 0 0 L 0 14 L 1 14 L 1 1 L 13 1 L 13 0 L 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 17,
    viewBox: "0 0 16 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 17,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 17 L 0 17 L 0 16 L 15 16 L 15 0 L 16 0 L 16 17 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 15,
    viewBox: "0 0 14 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 15,
      color: "rgb(128,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 0 L 13 0 L 13 14 L 0 14 L 0 15 L 14 15 L 14 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 13,
    viewBox: "0 0 12 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 12,
      height: 13,
      color: "rgb(192,192,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 12 0 L 12 13 L 0 13 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,14.500,2.500)",
      transformOrigin: "0 0",
      width: 12,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 4,
    viewBox: "0 0 7 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,4,10)",
      transformOrigin: "0 0",
      width: 7,
      height: 4,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 L 0 0 L 0 1 L 1 1 L 1 2 L 2 2 L 2 3 L 3 3 L 3 4 L 4 4 L 4 3 L 5 3 L 5 2 L 6 2 L 6 1 L 7 1 L 7 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __impls = {
    // figma: Orientation=Horizontal
    "orientation=horizontal": __body0,
    // figma: Orientation=Vertical
    "orientation=vertical": __body1
  };
  return (__impls[__vkey_Scrolls(props)] ?? __body0)();
}

// figma node: 19:41421 cd_drive-4
function CdDrive4(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b84b1a4a8d29f5d4",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }));
}

// figma node: 103:4204 Secondary Tree List (2 variants)
const __venc_SecondaryTreeList = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_SecondaryTreeList = p => "property1=" + __venc_SecondaryTreeList(p.property1);
function SecondaryTreeList(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default",
    text: _p.text ?? "CDROM"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: -1,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 23,
      display: "flex",
      flexDirection: "row",
      padding: "0px 3px 0px 3px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8.994,
      height: 9,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(128,128,128)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 1,
    viewBox: "0 0 5 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 4,
      width: 5,
      height: 1,
      color: "rgb(34,34,34)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1 L 0 0 L 5 0 L 5 1 L 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 1,
    viewBox: "0 -0.500 15 1",
    fill: "none",
    style: {
      position: "relative",
      width: 15,
      height: 1,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 15 0 L 15 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(CdDrive4, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(0,10,113)",
      boxShadow: "inset 0 0 0 1px rgb(34,34,34)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 1px 1px 1px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "11px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: -1,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 23,
      display: "flex",
      flexDirection: "row",
      padding: "0px 3px 0px 3px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8.994,
      height: 9,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(128,128,128)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 5,
    viewBox: "0 0 5 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 5,
      height: 5,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.002 L 0 2.003 L 2 2.003 L 2 0 L 3 0 L 3 2.003 L 5 2.003 L 5 3.002 L 3 3.002 L 3 5 L 2 5 L 2 3.002 L 0 3.002 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 1,
    viewBox: "0 -0.500 15 1",
    fill: "none",
    style: {
      position: "relative",
      width: 15,
      height: 1,
      flexShrink: 0,
      color: "rgb(34,34,34)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 15 0 L 15 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(CdDrive4, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 1px 1px 1px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "11px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text))));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1
  };
  return (__impls[__vkey_SecondaryTreeList(props)] ?? __body0)();
}

// figma node: 3:391 shut_down_cool-5
function ShutDownCool5(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 48,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-3e16496828f4697f",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 48
    }
  }));
}

// figma node: 4:2315 Star Main Menus (2 variants)
const __venc_StarMainMenus = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_StarMainMenus = p => "type=" + __venc_StarMainMenus(p.type);
function StarMainMenus(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default",
    showArrow: _p.showArrow ?? true,
    text: _p.text ?? "Shut Down"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 241,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "0px 3px 0px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(ShutDownCool5, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text)), props.showArrow && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,228,29.625)",
      transformOrigin: "0 0",
      width: 11.25,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.750,
    height: 5,
    viewBox: "0 0 8.750 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.25,
      top: 2.5,
      width: 8.75,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.75 0 L 0 0 L 0 1.25 L 1.25 1.25 L 1.25 2.5 L 2.5 2.5 L 2.5 3.75 L 3.75 3.75 L 3.75 5 L 5 5 L 5 3.75 L 6.25 3.75 L 6.25 2.5 L 7.5 2.5 L 7.5 1.25 L 8.75 1.25 L 8.75 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 241,
      backgroundColor: "rgb(0,0,129)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "0px 3px 0px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(ShutDownCool5, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text)), props.showArrow && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,228,29.625)",
      transformOrigin: "0 0",
      width: 11.25,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.750,
    height: 5,
    viewBox: "0 0 8.750 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.25,
      top: 2.5,
      width: 8.75,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.75 0 L 0 0 L 0 1.25 L 1.25 1.25 L 1.25 2.5 L 2.5 2.5 L 2.5 3.75 L 3.75 3.75 L 3.75 5 L 5 5 L 5 3.75 L 6.25 3.75 L 6.25 2.5 L 7.5 2.5 L 7.5 1.25 L 8.75 1.25 L 8.75 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Hover
    "type=hover": __body1
  };
  return (__impls[__vkey_StarMainMenus(props)] ?? __body0)();
}

// figma node: 3:130 windows-4
function Windows4(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a64de9bcd8f7487d",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }));
}

// figma node: 4:2721 Start (3 variants)
const __venc_Start = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Start = p => "type=" + __venc_Start(p.type);
function Start(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default",
    text: _p.text ?? "Start"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(223,223,223), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "3px 4px 3px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Windows4, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif Bold\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16.500px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(192,192,192)",
      display: "flex",
      flexDirection: "column",
      padding: "3px 4px 3px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Windows4, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif Bold\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16.500px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 23,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 3px 4px 3px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48,
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "0px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Windows4, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif Bold\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16.500px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text))));
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Pressed
    "type=pressed": __body1,
    // figma: Type=Focused
    "type=focused": __body2
  };
  return (__impls[__vkey_Start(props)] ?? __body0)();
}

// figma node: 3:755 msie2-4
function Msie24(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a485b4df49104c5d",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }));
}

// figma node: 4:2221 Start menu blocks (2 variants)
const __venc_StartMenuBlocks = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_StartMenuBlocks = p => "type=" + __venc_StartMenuBlocks(p.type);
function StartMenuBlocks(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default",
    showArrow: _p.showArrow ?? true,
    text: _p.text ?? "Internet Explorer"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 220,
      display: "flex",
      flexDirection: "row",
      padding: "3px 3px 3px 3px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 11,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Msie24, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text)), props.showArrow && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,207,16.625)",
      transformOrigin: "0 0",
      width: 11.25,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.750,
    height: 5,
    viewBox: "0 0 8.750 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.25,
      top: 2.5,
      width: 8.75,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.75 0 L 0 0 L 0 1.25 L 1.25 1.25 L 1.25 2.5 L 2.5 2.5 L 2.5 3.75 L 3.75 3.75 L 3.75 5 L 5 5 L 5 3.75 L 6.25 3.75 L 6.25 2.5 L 7.5 2.5 L 7.5 1.25 L 8.75 1.25 L 8.75 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 220,
      backgroundColor: "rgb(0,0,129)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 3px 3px 3px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 11,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Msie24, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text)), props.showArrow && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,207,16.625)",
      transformOrigin: "0 0",
      width: 11.25,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.750,
    height: 5,
    viewBox: "0 0 8.750 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.25,
      top: 2.5,
      width: 8.75,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.75 0 L 0 0 L 0 1.25 L 1.25 1.25 L 1.25 2.5 L 2.5 2.5 L 2.5 3.75 L 3.75 3.75 L 3.75 5 L 5 5 L 5 3.75 L 6.25 3.75 L 6.25 2.5 L 7.5 2.5 L 7.5 1.25 L 8.75 1.25 L 8.75 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Hover
    "type=hover": __body1
  };
  return (__impls[__vkey_StartMenuBlocks(props)] ?? __body0)();
}

// figma node: 3:1432 directory_business_calendar-1
function DirectoryBusinessCalendar1(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e9e6c03b86d6d621",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }));
}

// figma node: 4:372 Status Bar (1 variants)
function StatusBar(_p = {}) {
  const props = {
    ..._p,
    showIcon4: _p.showIcon4 ?? true,
    showText1: _p.showText1 ?? true,
    text1: _p.text1 ?? "Text 1",
    showIcon1: _p.showIcon1 ?? true,
    showDiv2: _p.showDiv2 ?? true,
    text2: _p.text2 ?? "Text 2",
    showIcon2: _p.showIcon2 ?? true,
    showDiv3: _p.showDiv3 ?? true,
    text4: _p.text4 ?? "Text 4",
    text3: _p.text3 ?? "Text 3",
    showIcon3: _p.showIcon3 ?? true,
    showDiv4: _p.showDiv4 ?? true
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 292,
      display: "flex",
      flexDirection: "row",
      gap: 1,
      padding: "0px 0.008px 0px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(223,223,223), inset 1px 1px 0px 0px rgb(128,128,128)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 3px 4.500px 3px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.showText1 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9,
      lineHeight: "9px",
      color: "rgb(34,34,34)",
      flexGrow: 1
    }
  }, props.text1), props.showIcon1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DirectoryBusinessCalendar1, null))), props.showDiv2 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(223,223,223), inset 1px 1px 0px 0px rgb(128,128,128)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 3px 4.500px 3px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9,
      lineHeight: "9px",
      color: "rgb(34,34,34)",
      flexGrow: 1
    }
  }, props.text2), props.showIcon2 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(DirectoryBusinessCalendar1, null))), props.showDiv3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(223,223,223), inset 1px 1px 0px 0px rgb(128,128,128)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 3px 4.500px 3px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9,
      lineHeight: "9px",
      color: "rgb(34,34,34)",
      flexGrow: 1
    }
  }, props.text3), props.showIcon3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DirectoryBusinessCalendar1, null))), props.showDiv4 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(223,223,223), inset 1px 1px 0px 0px rgb(128,128,128)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 3px 4.500px 3px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9,
      lineHeight: "9px",
      color: "rgb(34,34,34)",
      flexGrow: 1
    }
  }, props.text4), props.showIcon4 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DirectoryBusinessCalendar1, null))));
}

// figma node: 108:5111 Tab (W98 Roundness) (3 variants)
const __venc_TabW98Roundness = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_TabW98Roundness = p => "size=" + __venc_TabW98Roundness(p.size);
function TabW98Roundness(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "default",
    text: _p.text ?? "Medium Tab"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 70,
      height: 23,
      position: "relative",
      color: "rgb(217,217,217)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 70,
      height: 23,
      clipPath: "inset(-1px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 70,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -2px 0px 0px 0px rgba(38,38,38,0.5), inset -1px 0px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 6px 6px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "11px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 118,
      height: 23,
      position: "relative",
      color: "rgb(217,217,217)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 118,
      height: 23,
      clipPath: "inset(-1px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 118,
      backgroundColor: "rgb(184,192,193)",
      boxShadow: "inset -2px 0px 0px 0px rgba(38,38,38,0.5), inset -1px 0px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 6px 6px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "11px",
      color: "rgb(34,34,34)",
      flexShrink: 0
    }
  }, props.text1 ?? "Super duper longer tab"))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 38,
      height: 23,
      position: "relative",
      color: "rgb(217,217,217)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 38,
      height: 23,
      clipPath: "inset(-1px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 38,
      backgroundColor: "rgb(184,192,193)",
      boxShadow: "inset -2px 0px 0px 0px rgba(38,38,38,0.5), inset -1px 0px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 6px 6px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "11px",
      color: "rgb(34,34,34)",
      flexShrink: 0
    }
  }, props.text1 ?? "Tab 1"))));
  const __impls = {
    // figma: Size=Default
    "size=default": __body0,
    // figma: Size=Variant3
    "size=variant3": __body1,
    // figma: Size=Variant2
    "size=variant2": __body2
  };
  return (__impls[__vkey_TabW98Roundness(props)] ?? __body0)();
}

// figma node: 19:41921 mouse-2
function Mouse2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-fcffc39d75c19108",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }));
}

// figma node: 103:4273 Terciary Tree List (2 variants)
const __venc_TerciaryTreeList = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_TerciaryTreeList = p => "property1=" + __venc_TerciaryTreeList(p.property1);
function TerciaryTreeList(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default",
    text: _p.text ?? "Mouse"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 92,
      display: "flex",
      flexDirection: "row",
      gap: -1,
      padding: "0px 22px 0px 22px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(34,34,34)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "0px 3px 0px 3px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "0px 3px 0px 3px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 4.500,
    viewBox: "0 0 15 4.500",
    fill: "none",
    style: {
      position: "relative",
      width: 15,
      height: 4.5,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.5 L -0.5 4.5 L -0.5 5 L 0 5 L 0 4.5 Z M 0 5 L 15 5 L 15 4 L 0 4 L 0 5 Z M 0.5 4.5 L 0.5 0 L -0.5 0 L -0.5 4.5 L 0.5 4.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(Mouse2, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(0,10,113)",
      boxShadow: "inset 0 0 0 1px rgb(34,34,34)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 1px 1px 1px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "11px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 92,
      display: "flex",
      flexDirection: "row",
      gap: -1,
      padding: "0px 22px 0px 22px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(34,34,34)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "0px 3px 0px 3px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      display: "flex",
      flexDirection: "row",
      padding: "0px 3px 0px 3px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 4.500,
    viewBox: "0 0 15 4.500",
    fill: "none",
    style: {
      position: "relative",
      width: 15,
      height: 4.5,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.5 L -0.5 4.5 L -0.5 5 L 0 5 L 0 4.5 Z M 0 5 L 15 5 L 15 4 L 0 4 L 0 5 Z M 0.5 4.5 L 0.5 0 L -0.5 0 L -0.5 4.5 L 0.5 4.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.instance ?? /*#__PURE__*/React.createElement(Mouse2, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 1px 1px 1px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "11px",
      color: "rgb(34,34,34)",
      flexShrink: 0
    }
  }, props.text))));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1
  };
  return (__impls[__vkey_TerciaryTreeList(props)] ?? __body0)();
}

// figma node: 3:1410 directory_closed_cool-4
function DirectoryClosedCool4(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e1c9e2b503b32e87",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }));
}

// figma node: 3:2073 Text Input (4 variants)
const __venc_TextInput = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_TextInput = p => "type=" + __venc_TextInput(p.type);
function TextInput(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "disabled",
    text: _p.text ?? "test@test.com",
    showIcon: _p.showIcon ?? true,
    showDropdown: _p.showDropdown ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 200,
      height: 21,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px -1px 0px 0px rgb(255,255,255), inset 1px 1px 0px 0px rgb(128,128,128), inset -2px -2px 0px 0px rgb(223,223,223), inset 2px 2px 0px 0px rgb(10,10,10)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 4,
      top: -0.5,
      width: 192.2,
      height: 22,
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(0,0,0)"
    }
  }, props.text));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 200,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px -1px 0px 0px rgb(255,255,255), inset 1px 1px 0px 0px rgb(128,128,128), inset -2px -2px 0px 0px rgb(223,223,223), inset 2px 2px 0px 0px rgb(10,10,10)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "0px 3px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(DirectoryClosedCool4, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(0,0,0)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.text), props.showDropdown && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 17,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 16,
    viewBox: "0 0 15 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 16,
      color: "rgb(223,223,223)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 0 L 0 0 L 0 16 L 1 16 L 1 1 L 15 1 L 15 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 14,
    viewBox: "0 0 13 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 13,
      height: 14,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 0 0 L 0 14 L 1 14 L 1 1 L 13 1 L 13 0 L 1 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 17,
    viewBox: "0 0 16 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 17,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 17 L 0 17 L 0 16 L 15 16 L 15 0 L 16 0 L 16 17 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 15,
    viewBox: "0 0 14 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 15,
      color: "rgb(128,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 0 L 13 0 L 13 14 L 0 14 L 0 15 L 14 15 L 14 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 13,
    viewBox: "0 0 12 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 12,
      height: 13,
      color: "rgb(192,192,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 12 0 L 12 13 L 0 13 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 4,
    viewBox: "0 0 7 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 6.5,
      width: 7,
      height: 4,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0 L 0 0 L 0 1 L 1 1 L 1 2 L 2 2 L 2 3 L 3 3 L 3 4 L 4 4 L 4 3 L 5 3 L 5 2 L 6 2 L 6 1 L 7 1 L 7 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 200,
      height: 21,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px -1px 0px 0px rgb(255,255,255), inset 1px 1px 0px 0px rgb(128,128,128), inset -2px -2px 0px 0px rgb(223,223,223), inset 2px 2px 0px 0px rgb(10,10,10)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 4,
      top: -0.5,
      width: 192.2,
      height: 22,
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(0,0,0)"
    }
  }, props.text1 ?? "•••••••"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 200,
      height: 21,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(255,255,255), inset 1px 1px 0px 0px rgb(128,128,128), inset -2px -2px 0px 0px rgb(223,223,223), inset 2px 2px 0px 0px rgb(10,10,10)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 4,
      top: -0.5,
      width: 105.2,
      height: 22,
      fontFamily: "\"MS Sans Serif\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(128,128,128)"
    }
  }, props.text));
  const __impls = {
    // figma: Type=Normal
    "type=normal": __body0,
    // figma: Type=with Icon
    "type=with icon": __body1,
    // figma: Type=Password
    "type=password": __body2,
    // figma: Type=Disabled
    "type=disabled": __body3
  };
  return (__impls[__vkey_TextInput(props)] ?? __body3)();
}

// figma node: 19:41433 media_player-1
function MediaPlayer1(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-3dad81aeea855eb0",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }));
}

// figma node: 4:232 Title Bar (5 variants)
const __venc_TitleBar = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_TitleBar = p => "type=" + __venc_TitleBar(p.type);
function TitleBar(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default",
    titleBarText: _p.titleBarText ?? "A Title Bar",
    showIcon: _p.showIcon ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 296,
      background: "linear-gradient(90deg, rgb(0,0,128) 0.00%, rgb(16,132,208) 100.00%)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 2px 3px 3px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.showIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(MediaPlayer1, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif Bold\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.titleBarText)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 7,
    viewBox: "0 0 8 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 2 0 L 2 1 L 3 1 L 3 2 L 5 2 L 5 1 L 6 1 L 6 0 L 8 0 L 8 1 L 7 1 L 7 2 L 6 2 L 6 3 L 5 3 L 5 4 L 6 4 L 6 5 L 7 5 L 7 6 L 8 6 L 8 7 L 6 7 L 6 6 L 5 6 L 5 5 L 3 5 L 3 6 L 2 6 L 2 7 L 0 7 L 0 6 L 1 6 L 1 5 L 2 5 L 2 4 L 3 4 L 3 3 L 2 3 L 2 2 L 1 2 L 1 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 296,
      background: "linear-gradient(90deg, rgb(0,0,128) 0.00%, rgb(16,132,208) 100.00%)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 2px 3px 3px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.showIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(MediaPlayer1, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif Bold\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.titleBarText)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      padding: "9px 6px 3px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 6,
      height: 2,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 2,
    viewBox: "0 0 6 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 6 0 L 6 2 L 0 2 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 0,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 4px 3px 3px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 9,
      height: 9,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 9,
    viewBox: "0 0 9 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9,
      height: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 0 L 0 0 L 0 9 L 9 9 L 9 0 Z M 8 2 L 1 2 L 1 8 L 8 8 L 8 2 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 34,
      top: 0,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 7,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 7,
    viewBox: "0 0 8 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 2 0 L 2 1 L 3 1 L 3 2 L 5 2 L 5 1 L 6 1 L 6 0 L 8 0 L 8 1 L 7 1 L 7 2 L 6 2 L 6 3 L 5 3 L 5 4 L 6 4 L 6 5 L 7 5 L 7 6 L 8 6 L 8 7 L 6 7 L 6 6 L 5 6 L 5 5 L 3 5 L 3 6 L 2 6 L 2 7 L 0 7 L 0 6 L 1 6 L 1 5 L 2 5 L 2 4 L 3 4 L 3 3 L 2 3 L 2 2 L 1 2 L 1 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 296,
      background: "linear-gradient(90deg, rgb(0,0,128) 0.00%, rgb(16,132,208) 100.00%)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 2px 3px 3px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.showIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(MediaPlayer1, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif Bold\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.titleBarText)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      padding: "9px 6px 3px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 6,
      height: 2,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 2,
    viewBox: "0 0 6 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 6 0 L 6 2 L 0 2 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 0,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 5px 3px 3px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 9,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 9,
    viewBox: "0 0 8 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 8 0 L 8 2 L 2 2 L 2 0 Z M 7 2 L 8 2 L 8 6 L 7 6 L 7 2 Z M 2 2 L 3 2 L 3 3 L 2 3 L 2 2 Z M 6 5 L 7 5 L 7 6 L 6 6 L 6 5 Z M 0 3 L 6 3 L 6 5 L 0 5 L 0 3 Z M 5 5 L 6 5 L 6 9 L 5 9 L 5 5 Z M 0 5 L 1 5 L 1 9 L 0 9 L 0 5 Z M 1 8 L 5 8 L 5 9 L 1 9 L 1 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 34,
      top: 0,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 7,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 7,
    viewBox: "0 0 8 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 2 0 L 2 1 L 3 1 L 3 2 L 5 2 L 5 1 L 6 1 L 6 0 L 8 0 L 8 1 L 7 1 L 7 2 L 6 2 L 6 3 L 5 3 L 5 4 L 6 4 L 6 5 L 7 5 L 7 6 L 8 6 L 8 7 L 6 7 L 6 6 L 5 6 L 5 5 L 3 5 L 3 6 L 2 6 L 2 7 L 0 7 L 0 6 L 1 6 L 1 5 L 2 5 L 2 4 L 3 4 L 3 3 L 2 3 L 2 2 L 1 2 L 1 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 296,
      background: "linear-gradient(90deg, rgb(0,0,128) 0.00%, rgb(16,132,208) 100.00%)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 2px 3px 3px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.showIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(MediaPlayer1, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif Bold\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.titleBarText)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 5px 3px 5px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 6,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 9,
    viewBox: "0 0 6 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1 L 2 1 L 2 3 L 0 3 L 0 1 Z M 1 0 L 5 0 L 5 1 L 1 1 L 1 0 Z M 4 1 L 6 1 L 6 3 L 4 3 L 4 1 Z M 3 3 L 5 3 L 5 4 L 3 4 L 3 3 Z M 2 4 L 4 4 L 4 6 L 2 6 L 2 4 Z M 2 7 L 4 7 L 4 9 L 2 9 L 2 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 7,
    viewBox: "0 0 8 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 2 0 L 2 1 L 3 1 L 3 2 L 5 2 L 5 1 L 6 1 L 6 0 L 8 0 L 8 1 L 7 1 L 7 2 L 6 2 L 6 3 L 5 3 L 5 4 L 6 4 L 6 5 L 7 5 L 7 6 L 8 6 L 8 7 L 6 7 L 6 6 L 5 6 L 5 5 L 3 5 L 3 6 L 2 6 L 2 7 L 0 7 L 0 6 L 1 6 L 1 5 L 2 5 L 2 4 L 3 4 L 3 3 L 2 3 L 2 2 L 1 2 L 1 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 296,
      background: "linear-gradient(90deg, rgb(128,128,128) 0.00%, rgb(181,181,181) 100.00%)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 2px 3px 3px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.showIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(MediaPlayer1, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"MS Sans Serif Bold\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.titleBarText)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128), inset 2px 2px 0px 0px rgb(223,223,223)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 7,
    viewBox: "0 0 8 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 2 0 L 2 1 L 3 1 L 3 2 L 5 2 L 5 1 L 6 1 L 6 0 L 8 0 L 8 1 L 7 1 L 7 2 L 6 2 L 6 3 L 5 3 L 5 4 L 6 4 L 6 5 L 7 5 L 7 6 L 8 6 L 8 7 L 6 7 L 6 6 L 5 6 L 5 5 L 3 5 L 3 6 L 2 6 L 2 7 L 0 7 L 0 6 L 1 6 L 1 5 L 2 5 L 2 4 L 3 4 L 3 3 L 2 3 L 2 2 L 1 2 L 1 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Maximize
    "type=maximize": __body1,
    // figma: Type=Minimize
    "type=minimize": __body2,
    // figma: Type=Help
    "type=help": __body3,
    // figma: Type=Inactive
    "type=inactive": __body4
  };
  return (__impls[__vkey_TitleBar(props)] ?? __body0)();
}

// figma node: 14:1023 Frame 1 (3 variants)
const __venc_Frame1 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Frame1 = p => "property1=" + __venc_Frame1(p.property1);
function Frame1(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 21,
      height: 122,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,9,122)",
      transformOrigin: "0 0",
      width: 122,
      height: 3,
      backgroundColor: "rgb(0,0,0)",
      boxShadow: "inset 1px 1px 0px 0px rgb(184,184,184), 0px 1px 0px 0px rgb(255,255,255), inset -1px -1px 0px 0px rgb(117,117,117), inset 0px 1px 0px 0px rgb(159,159,159)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21,
      height: 11,
      backgroundColor: "rgb(217,217,217)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128)"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 21,
      height: 122,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,9,122)",
      transformOrigin: "0 0",
      width: 122,
      height: 3,
      backgroundColor: "rgb(0,0,0)",
      boxShadow: "inset 1px 1px 0px 0px rgb(184,184,184), 0px 1px 0px 0px rgb(255,255,255), inset -1px -1px 0px 0px rgb(117,117,117), inset 0px 1px 0px 0px rgb(159,159,159)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 55,
      width: 21,
      height: 11,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128)"
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 21,
      height: 122,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,9,122)",
      transformOrigin: "0 0",
      width: 122,
      height: 3,
      backgroundColor: "rgb(0,0,0)",
      boxShadow: "inset 1px 1px 0px 0px rgb(184,184,184), 0px 1px 0px 0px rgb(255,255,255), inset -1px -1px 0px 0px rgb(117,117,117), inset 0px 1px 0px 0px rgb(159,159,159)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 113,
      width: 21,
      height: 11,
      backgroundColor: "rgb(192,192,192)",
      boxShadow: "inset -1px -1px 0px 0px rgb(10,10,10), inset 1px 1px 0px 0px rgb(255,255,255), inset -2px -2px 0px 0px rgb(128,128,128)"
    }
  }));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1,
    // figma: Property 1=Variant3
    "property1=variant3": __body2
  };
  return (__impls[__vkey_Frame1(props)] ?? __body0)();
}

// Globals for scripts loaded after this file.
window.Button = Button;
window.Checkbox = Checkbox;
window.Cursors = Cursors;
window.Executable0 = Executable0;
window.DesktopShortcut = DesktopShortcut;
window.Dropdown = Dropdown;
window.Emoji = Emoji;
window.HorizontalSlider = HorizontalSlider;
window.Minesweeper = Minesweeper;
window.Minesweeper13 = Minesweeper13;
window.Minesweeper2 = Minesweeper2;
window.Minesweeper3 = Minesweeper3;
window.Minesweeper4 = Minesweeper4;
window.Minesweeper5 = Minesweeper5;
window.Minesweeper6 = Minesweeper6;
window.Minesweeper7 = Minesweeper7;
window.Minesweeper8 = Minesweeper8;
window.MinesweeperFlag = MinesweeperFlag;
window.MinesweeperMine = MinesweeperMine;
window.InteractivePieces = InteractivePieces;
window.Label = Label;
window.ComputerExplorerCool4 = ComputerExplorerCool4;
window.MainTreeList = MainTreeList;
window.DigitCentreOn = DigitCentreOn;
window.DigitEdgeOn = DigitEdgeOn;
window.Digit8 = Digit8;
window.Digit0 = Digit0;
window.DigitCentreOff = DigitCentreOff;
window.DigitEdgeOff = DigitEdgeOff;
window.Digit1 = Digit1;
window.Digit2 = Digit2;
window.Digit3 = Digit3;
window.Digit4 = Digit4;
window.Digit5 = Digit5;
window.Digit6 = Digit6;
window.Digit7 = Digit7;
window.Digit9 = Digit9;
window.Numbers = Numbers;
window.Magnifier = Magnifier;
window.PaintButton = PaintButton;
window.PlayerIcons = PlayerIcons;
window.Scrolls = Scrolls;
window.CdDrive4 = CdDrive4;
window.SecondaryTreeList = SecondaryTreeList;
window.ShutDownCool5 = ShutDownCool5;
window.StarMainMenus = StarMainMenus;
window.Windows4 = Windows4;
window.Start = Start;
window.Msie24 = Msie24;
window.StartMenuBlocks = StartMenuBlocks;
window.DirectoryBusinessCalendar1 = DirectoryBusinessCalendar1;
window.StatusBar = StatusBar;
window.TabW98Roundness = TabW98Roundness;
window.Mouse2 = Mouse2;
window.TerciaryTreeList = TerciaryTreeList;
window.DirectoryClosedCool4 = DirectoryClosedCool4;
window.TextInput = TextInput;
window.MediaPlayer1 = MediaPlayer1;
window.TitleBar = TitleBar;
window.Frame1 = Frame1;