'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isBuildOpen, setIsBuildOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const pathname = usePathname();

  // Check if current path is active
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const getButtonStyle = (isActiveState: boolean) => ({
    alignContent: "center",
    alignItems: "center",
    appearance: "auto" as const,
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
    display: "flex",
    fontFamily: "Arial",
    fontSize: "13.3333px",
    gap: "10px",
    gridGap: "10px",
    gridRowGap: "10px",
    height: "40px",
    lineHeight: "normal",
    minWidth: "fit-content",
    paddingBottom: "1px",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "1px",
    pointerEvents: "all" as const,
    position: "relative" as const,
    rowGap: "10px",
    textAlign: "center" as const,
    whiteSpace: "nowrap" as const,
    zIndex: 1,
    transition: "all 0.3s ease"
  });

  const textBaseStyle = {
    borderColor: "rgb(5, 96, 50)",
    cursor: "pointer",
    fontFamily: "WorkSans, sans-serif",
    lineHeight: "22.4px",
    outlineColor: "rgb(5, 96, 50)",
    pointerEvents: "all" as const,
    textAlign: "center" as const,
    textDecorationColor: "rgb(5, 96, 50)",
    textEmphasisColor: "rgb(5, 96, 50)"
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      pointerEvents: "all",
      position: "sticky",
      top: "0px",
      transitionDuration: "0.4s",
      width: "100%",
      zIndex: 99,
      paddingBottom: "22px",
      paddingTop: "22px",
      paddingLeft: "80px",
      paddingRight: "80px"
    }}>
      <div style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "1760px",
        width: "100%"
      }}>
        {/* Logo */}
        <a href="https://fedrok.com/" style={{ 
          cursor: "pointer",
          pointerEvents: "all" 
        }}>
          <div style={{
            alignItems: "center",
            boxSizing: "content-box",
            cursor: "pointer",
            display: "inline-grid",
            height: "60px",
            justifyItems: "center",
            maxHeight: "100%",
            maxWidth: "100%",
            overflowClipMargin: "content-box",
            overflowX: "hidden",
            overflowY: "hidden",
            pointerEvents: "none",
            width: "201px"
          }}>
            <span style={{
              fontFamily: "var(--font-unbounded), sans-serif",
              fontSize: "28px",
              fontWeight: "bold",
              color: "rgb(5, 96, 50)"
            }}>
              FEDROK
            </span>
          </div>
        </a>

        {/* Navigation */}
        <div style={{
          alignItems: "center",
          backdropFilter: "blur(24px)",
          backgroundColor: "rgba(209, 214, 210, 0.3)",
          display: "flex",
          gap: "2px",
          justifyContent: "center",
          paddingBottom: "10px",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "10px",
          pointerEvents: "all",
          position: "relative",
          transitionDuration: "0.5s",
          width: "auto",
          borderRadius: "0px"
        }}>
          {/* FDK Coin Button */}
          <button 
            style={{
              ...getButtonStyle(isActive('/fdk-coin') || activeItem === 'fdk-coin'),
              backgroundColor: isActive('/fdk-coin') || activeItem === 'fdk-coin' ? "rgb(5, 96, 50)" : "rgba(0, 0, 0, 0)"
            }}
            onClick={() => setActiveItem(activeItem === 'fdk-coin' ? '' : 'fdk-coin')}
            onMouseEnter={(e) => {
              if (!isActive('/fdk-coin') && activeItem !== 'fdk-coin') {
                e.currentTarget.style.backgroundColor = "rgb(235, 251, 223)";
                const p = e.currentTarget.querySelector('p');
                if (p) p.style.color = "rgb(5, 96, 50)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isActive('/fdk-coin') || activeItem === 'fdk-coin' ? "rgb(5, 96, 50)" : "rgba(0, 0, 0, 0)";
              const p = e.currentTarget.querySelector('p');
              if (p) p.style.color = isActive('/fdk-coin') || activeItem === 'fdk-coin' ? "rgb(255, 255, 255)" : "rgb(5, 96, 50)";
            }}
          >
            <p style={{
              ...textBaseStyle,
              color: isActive('/fdk-coin') || activeItem === 'fdk-coin' ? "rgb(255, 255, 255)" : "rgb(5, 96, 50)"
            }}>
              FDK Coin
            </p>
          </button>

          {/* Divider */}
          <div style={{
            width: "1px",
            height: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            margin: "0 8px",
            alignSelf: "center"
          }}></div>

          {/* About Button */}
          <button 
            style={{
              ...getButtonStyle(isActive('/about') || activeItem === 'about'),
              backgroundColor: isActive('/about') || activeItem === 'about' ? "rgb(5, 96, 50)" : "rgba(0, 0, 0, 0)"
            }}
            onClick={() => setActiveItem(activeItem === 'about' ? '' : 'about')}
            onMouseEnter={(e) => {
              if (!isActive('/about') && activeItem !== 'about') {
                e.currentTarget.style.backgroundColor = "rgb(235, 251, 223)";
                const p = e.currentTarget.querySelector('p');
                if (p) p.style.color = "rgb(5, 96, 50)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isActive('/about') || activeItem === 'about' ? "rgb(5, 96, 50)" : "rgba(0, 0, 0, 0)";
              const p = e.currentTarget.querySelector('p');
              if (p) p.style.color = isActive('/about') || activeItem === 'about' ? "rgb(255, 255, 255)" : "rgb(5, 96, 50)";
            }}
          >
            <p style={{
              ...textBaseStyle,
              color: isActive('/about') || activeItem === 'about' ? "rgb(255, 255, 255)" : "rgb(5, 96, 50)"
            }}>
              About
            </p>
          </button>

          {/* Divider */}
          <div style={{
            width: "1px",
            height: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            margin: "0 8px",
            alignSelf: "center"
          }}></div>

          {/* Explore Dropdown */}
          <div 
            style={{ position: "relative" }}
            onMouseEnter={() => setIsExploreOpen(true)}
            onMouseLeave={() => setIsExploreOpen(false)}
          >
            <button 
              style={{
                ...getButtonStyle(isActive('/explore')),
                backgroundColor: isActive('/explore') ? "rgb(5, 96, 50)" : (isExploreOpen ? "rgb(235, 251, 223)" : "rgba(0, 0, 0, 0)")
              }}
            >
              <p style={{
                ...textBaseStyle,
                color: isActive('/explore') ? "rgb(255, 255, 255)" : "rgb(5, 96, 50)"
              }}>
                Explore
              </p>
              <div style={{
                borderColor: "rgb(5, 96, 50)",
                boxSizing: "content-box",
                color: isActive('/explore') ? "rgb(255, 255, 255)" : "rgb(5, 96, 50)",
                cursor: "pointer",
                fontFamily: "Arial",
                fontSize: "13.3333px",
                height: "15px",
                lineHeight: "normal",
                outlineColor: "rgb(5, 96, 50)",
                overflowClipMargin: "content-box",
                overflowX: "hidden",
                overflowY: "hidden",
                pointerEvents: "all",
                textAlign: "center",
                textDecorationColor: "rgb(5, 96, 50)",
                textEmphasisColor: "rgb(5, 96, 50)",
                transitionDelay: "0.1s",
                transitionDuration: "0.3s",
                transitionProperty: "transform",
                width: "15px",
                transform: isExploreOpen ? "rotate(180deg)" : "rotate(0deg)"
              }}>
                ▼
              </div>
            </button>
            
            <div style={{
              backdropFilter: "blur(24px)",
              backgroundColor: "rgb(255, 255, 255)",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
              borderRadius: "12px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              color: "rgb(5, 96, 50)",
              cursor: "pointer",
              display: "block",
              fontFamily: "Arial",
              fontSize: "13.3333px",
              lineHeight: "normal",
              pointerEvents: "all",
              position: "absolute",
              right: "0px",
              textAlign: "center",
              top: "100%",
              transform: "matrix(1, 0, 0, 1, -10, 0)",
              marginTop: "15px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              opacity: isExploreOpen ? 1 : 0,
              maxHeight: isExploreOpen ? "500px" : "0px",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out"
            }}>
              <div style={{
                borderColor: "rgb(5, 96, 50)",
                color: "rgb(5, 96, 50)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                flexFlow: "column nowrap",
                fontFamily: "Arial",
                fontSize: "13.3333px",
                gap: "20px normal",
                gridGap: "20px normal",
                gridRowGap: "20px",
                lineHeight: "normal",
                outlineColor: "rgb(5, 96, 50)",
                pointerEvents: "all",
                rowGap: "20px",
                textAlign: "center",
                textDecorationColor: "rgb(5, 96, 50)",
                textEmphasisColor: "rgb(5, 96, 50)"
              }}>
                <a href="http://51.107.25.235/blocks" style={{
                  alignItems: "center",
                  borderColor: "rgb(5, 96, 50)",
                  color: "rgb(5, 96, 50)",
                  cursor: "pointer",
                  display: "flex",
                  fontFamily: "Arial",
                  fontSize: "13.3333px",
                  gap: "normal 16px",
                  gridGap: "normal 16px",
                  lineHeight: "normal",
                  marginLeft: "24px",
                  marginRight: "24px",
                  marginTop: "24px",
                  outlineColor: "rgb(5, 96, 50)",
                  pointerEvents: "all",
                  textAlign: "center",
                  textDecorationColor: "rgb(5, 96, 50)",
                  textEmphasisColor: "rgb(5, 96, 50)",
                  textDecoration: "none"
                }}>
                  <div style={{
                    alignItems: "center",
                    backgroundColor: "rgb(235, 251, 223)",
                    borderBottomLeftRadius: "8px",
                    borderBottomRightRadius: "8px",
                    borderColor: "rgb(5, 96, 50)",
                    borderRadius: "8px",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    color: "rgb(5, 96, 50)",
                    cursor: "pointer",
                    display: "flex",
                    fontFamily: "Arial",
                    fontSize: "13.3333px",
                    height: "32px",
                    justifyContent: "center",
                    lineHeight: "normal",
                    outlineColor: "rgb(5, 96, 50)",
                    pointerEvents: "all",
                    textAlign: "center",
                    textDecorationColor: "rgb(5, 96, 50)",
                    textEmphasisColor: "rgb(5, 96, 50)",
                    width: "32px"
                  }}>
                    📊
                  </div>
                  <span>FDKScan</span>
                </a>
                <a href="https://fedrok.com/ecosystem" style={{
                  alignItems: "center",
                  borderColor: "rgb(5, 96, 50)",
                  color: "rgb(5, 96, 50)",
                  cursor: "pointer",
                  display: "flex",
                  fontFamily: "Arial",
                  fontSize: "13.3333px",
                  gap: "normal 16px",
                  gridGap: "normal 16px",
                  lineHeight: "normal",
                  marginLeft: "24px",
                  marginRight: "24px",
                  marginTop: "12px",
                  outlineColor: "rgb(5, 96, 50)",
                  pointerEvents: "all",
                  textAlign: "center",
                  textDecorationColor: "rgb(5, 96, 50)",
                  textEmphasisColor: "rgb(5, 96, 50)",
                  textDecoration: "none"
                }}>
                  <div style={{
                    alignItems: "center",
                    backgroundColor: "rgb(235, 251, 223)",
                    borderRadius: "8px",
                    color: "rgb(5, 96, 50)",
                    cursor: "pointer",
                    display: "flex",
                    height: "32px",
                    justifyContent: "center",
                    width: "32px"
                  }}>
                    🌐
                  </div>
                  <span>Ecosystem</span>
                </a>
                <a href="https://fedrok.com/roadmap" style={{
                  alignItems: "center",
                  borderColor: "rgb(5, 96, 50)",
                  color: "rgb(5, 96, 50)",
                  cursor: "pointer",
                  display: "flex",
                  fontFamily: "Arial",
                  fontSize: "13.3333px",
                  gap: "normal 16px",
                  gridGap: "normal 16px",
                  lineHeight: "normal",
                  marginLeft: "24px",
                  marginRight: "24px",
                  marginTop: "12px",
                  outlineColor: "rgb(5, 96, 50)",
                  pointerEvents: "all",
                  textAlign: "center",
                  textDecorationColor: "rgb(5, 96, 50)",
                  textEmphasisColor: "rgb(5, 96, 50)",
                  textDecoration: "none"
                }}>
                  <div style={{
                    alignItems: "center",
                    backgroundColor: "rgb(235, 251, 223)",
                    borderRadius: "8px",
                    color: "rgb(5, 96, 50)",
                    cursor: "pointer",
                    display: "flex",
                    height: "32px",
                    justifyContent: "center",
                    width: "32px"
                  }}>
                    🗺️
                  </div>
                  <span>Roadmap</span>
                </a>
                <a href="https://fedrok.com/bridge" style={{
                  alignItems: "center",
                  borderColor: "rgb(5, 96, 50)",
                  color: "rgb(5, 96, 50)",
                  cursor: "pointer",
                  display: "flex",
                  fontFamily: "Arial",
                  fontSize: "13.3333px",
                  gap: "normal 16px",
                  gridGap: "normal 16px",
                  lineHeight: "normal",
                  marginLeft: "24px",
                  marginRight: "24px",
                  marginTop: "12px",
                  outlineColor: "rgb(5, 96, 50)",
                  pointerEvents: "all",
                  textAlign: "center",
                  textDecorationColor: "rgb(5, 96, 50)",
                  textEmphasisColor: "rgb(5, 96, 50)",
                  textDecoration: "none"
                }}>
                  <div style={{
                    alignItems: "center",
                    backgroundColor: "rgb(235, 251, 223)",
                    borderRadius: "8px",
                    color: "rgb(5, 96, 50)",
                    cursor: "pointer",
                    display: "flex",
                    height: "32px",
                    justifyContent: "center",
                    width: "32px"
                  }}>
                    🌉
                  </div>
                  <span>Bridge</span>
                </a>
                <a href="https://fedrok.com/exchange" style={{
                  alignItems: "center",
                  borderColor: "rgb(5, 96, 50)",
                  color: "rgb(5, 96, 50)",
                  cursor: "pointer",
                  display: "flex",
                  fontFamily: "Arial",
                  fontSize: "13.3333px",
                  gap: "normal 16px",
                  gridGap: "normal 16px",
                  lineHeight: "normal",
                  marginBottom: "24px",
                  marginLeft: "24px",
                  marginRight: "24px",
                  marginTop: "12px",
                  outlineColor: "rgb(5, 96, 50)",
                  pointerEvents: "all",
                  textAlign: "center",
                  textDecorationColor: "rgb(5, 96, 50)",
                  textEmphasisColor: "rgb(5, 96, 50)",
                  textDecoration: "none"
                }}>
                  <div style={{
                    alignItems: "center",
                    backgroundColor: "rgb(235, 251, 223)",
                    borderRadius: "8px",
                    color: "rgb(5, 96, 50)",
                    cursor: "pointer",
                    display: "flex",
                    height: "32px",
                    justifyContent: "center",
                    width: "32px"
                  }}>
                    💱
                  </div>
                  <span>Exchange</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            width: "1px",
            height: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            margin: "0 8px",
            alignSelf: "center"
          }}></div>

          {/* Build Dropdown */}
          <div 
            style={{ position: "relative" }}
            onMouseEnter={() => setIsBuildOpen(true)}
            onMouseLeave={() => setIsBuildOpen(false)}
          >
            <button 
              style={{
                ...getButtonStyle(isActive('/build')),
                backgroundColor: isActive('/build') ? "rgb(5, 96, 50)" : (isBuildOpen ? "rgb(235, 251, 223)" : "rgba(0, 0, 0, 0)")
              }}
            >
              <p style={{
                ...textBaseStyle,
                color: isActive('/build') ? "rgb(255, 255, 255)" : "rgb(5, 96, 50)"
              }}>
                Build
              </p>
              <div style={{
                borderColor: "rgb(5, 96, 50)",
                boxSizing: "content-box",
                color: isActive('/build') ? "rgb(255, 255, 255)" : "rgb(5, 96, 50)",
                cursor: "pointer",
                fontFamily: "Arial",
                fontSize: "13.3333px",
                height: "15px",
                lineHeight: "normal",
                outlineColor: "rgb(5, 96, 50)",
                overflowClipMargin: "content-box",
                overflowX: "hidden",
                overflowY: "hidden",
                pointerEvents: "all",
                textAlign: "center",
                textDecorationColor: "rgb(5, 96, 50)",
                textEmphasisColor: "rgb(5, 96, 50)",
                transitionDelay: "0.1s",
                transitionDuration: "0.3s",
                transitionProperty: "transform",
                width: "15px",
                transform: isBuildOpen ? "rotate(180deg)" : "rotate(0deg)"
              }}>
                ▼
              </div>
            </button>
            
            <div style={{
              backdropFilter: "blur(24px)",
              backgroundColor: "rgb(255, 255, 255)",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
              borderRadius: "12px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              color: "rgb(5, 96, 50)",
              cursor: "pointer",
              display: "block",
              fontFamily: "Arial",
              fontSize: "13.3333px",
              lineHeight: "normal",
              pointerEvents: "all",
              position: "absolute",
              right: "0px",
              textAlign: "center",
              top: "100%",
              transform: "matrix(1, 0, 0, 1, -10, 0)",
              marginTop: "15px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              opacity: isBuildOpen ? 1 : 0,
              maxHeight: isBuildOpen ? "500px" : "0px",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out"
            }}>
              <div style={{
                borderColor: "rgb(5, 96, 50)",
                color: "rgb(5, 96, 50)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                flexFlow: "column nowrap",
                fontFamily: "Arial",
                fontSize: "13.3333px",
                gap: "20px normal",
                gridGap: "20px normal",
                gridRowGap: "20px",
                lineHeight: "normal",
                outlineColor: "rgb(5, 96, 50)",
                pointerEvents: "all",
                rowGap: "20px",
                textAlign: "center",
                textDecorationColor: "rgb(5, 96, 50)",
                textEmphasisColor: "rgb(5, 96, 50)"
              }}>
                <a href="https://drive.google.com/file/d/1NDEqn9YSiHxaFZscQG4WiQBJT68Pfd-J/view?usp=sharing" style={{
                  alignItems: "center",
                  color: "rgb(5, 96, 50)",
                  cursor: "pointer",
                  display: "flex",
                  gap: "normal 16px",
                  marginLeft: "24px",
                  marginRight: "24px",
                  marginTop: "24px",
                  textDecoration: "none"
                }}>
                  <div style={{
                    alignItems: "center",
                    backgroundColor: "rgb(235, 251, 223)",
                    borderRadius: "8px",
                    display: "flex",
                    height: "32px",
                    justifyContent: "center",
                    width: "32px"
                  }}>
                    📄
                  </div>
                  <span>WhitePaper</span>
                </a>
                <a href="https://drive.google.com/file/d/1Nn5UT9H14OrPZxrGsp9bzqlzWz6TRhvh/view?usp=sharing" style={{
                  alignItems: "center",
                  color: "rgb(5, 96, 50)",
                  cursor: "pointer",
                  display: "flex",
                  gap: "normal 16px",
                  marginLeft: "24px",
                  marginRight: "24px",
                  marginTop: "12px",
                  textDecoration: "none"
                }}>
                  <div style={{
                    alignItems: "center",
                    backgroundColor: "rgb(235, 251, 223)",
                    borderRadius: "8px",
                    display: "flex",
                    height: "32px",
                    justifyContent: "center",
                    width: "32px"
                  }}>
                    📑
                  </div>
                  <span>YellowPaper</span>
                </a>
                <a href="https://fedrok.com/onepager" style={{
                  alignItems: "center",
                  color: "rgb(5, 96, 50)",
                  cursor: "pointer",
                  display: "flex",
                  gap: "normal 16px",
                  marginLeft: "24px",
                  marginRight: "24px",
                  marginTop: "12px",
                  textDecoration: "none"
                }}>
                  <div style={{
                    alignItems: "center",
                    backgroundColor: "rgb(235, 251, 223)",
                    borderRadius: "8px",
                    display: "flex",
                    height: "32px",
                    justifyContent: "center",
                    width: "32px"
                  }}>
                    📋
                  </div>
                  <span>Onepager</span>
                </a>
                <a href="https://fedrok.com/docs" style={{
                  alignItems: "center",
                  color: "rgb(5, 96, 50)",
                  cursor: "pointer",
                  display: "flex",
                  gap: "normal 16px",
                  marginLeft: "24px",
                  marginRight: "24px",
                  textDecoration: "none"
                }}>
                  <div style={{
                    alignItems: "center",
                    backgroundColor: "rgb(235, 251, 223)",
                    borderRadius: "8px",
                    display: "flex",
                    height: "32px",
                    justifyContent: "center",
                    width: "32px"
                  }}>
                    📚
                  </div>
                  <span>Docs</span>
                </a>
                <a href="https://github.com/fedrok" style={{
                  alignItems: "center",
                  color: "rgb(5, 96, 50)",
                  cursor: "pointer",
                  display: "flex",
                  gap: "normal 16px",
                  marginLeft: "24px",
                  marginRight: "24px",
                  textDecoration: "none"
                }}>
                  <div style={{
                    alignItems: "center",
                    backgroundColor: "rgb(235, 251, 223)",
                    borderRadius: "8px",
                    display: "flex",
                    height: "32px",
                    justifyContent: "center",
                    width: "32px"
                  }}>
                    🔗
                  </div>
                  <span>Github</span>
                </a>
                <a href="https://fedrok.notion.site" style={{
                  alignItems: "center",
                  color: "rgb(5, 96, 50)",
                  cursor: "pointer",
                  display: "flex",
                  gap: "normal 16px",
                  marginLeft: "24px",
                  marginRight: "24px",
                  marginBottom: "24px",
                  textDecoration: "none"
                }}>
                  <div style={{
                    alignItems: "center",
                    backgroundColor: "rgb(235, 251, 223)",
                    borderRadius: "8px",
                    display: "flex",
                    height: "32px",
                    justifyContent: "center",
                    width: "32px"
                  }}>
                    📝
                  </div>
                  <span>Notion</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            width: "1px",
            height: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            margin: "0 8px",
            alignSelf: "center"
          }}></div>

          {/* Blog Button */}
          <button 
            style={{
              ...getButtonStyle(isActive('/blog') || activeItem === 'blog'),
              backgroundColor: isActive('/blog') || activeItem === 'blog' ? "rgb(5, 96, 50)" : "rgba(0, 0, 0, 0)"
            }}
            onClick={() => setActiveItem(activeItem === 'blog' ? '' : 'blog')}
            onMouseEnter={(e) => {
              if (!isActive('/blog') && activeItem !== 'blog') {
                e.currentTarget.style.backgroundColor = "rgb(235, 251, 223)";
                const p = e.currentTarget.querySelector('p');
                if (p) p.style.color = "rgb(5, 96, 50)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isActive('/blog') || activeItem === 'blog' ? "rgb(5, 96, 50)" : "rgba(0, 0, 0, 0)";
              const p = e.currentTarget.querySelector('p');
              if (p) p.style.color = isActive('/blog') || activeItem === 'blog' ? "rgb(255, 255, 255)" : "rgb(5, 96, 50)";
            }}
          >
            <p style={{
              ...textBaseStyle,
              color: isActive('/blog') || activeItem === 'blog' ? "rgb(255, 255, 255)" : "rgb(5, 96, 50)"
            }}>
              Blog
            </p>
          </button>

          {/* Divider */}
          <div style={{
            width: "1px",
            height: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            margin: "0 8px",
            alignSelf: "center"
          }}></div>

          {/* Contact Us Button */}
          <button 
            style={{
              ...getButtonStyle(isActive('/contact') || activeItem === 'contact'),
              backgroundColor: isActive('/contact') || activeItem === 'contact' ? "rgb(5, 96, 50)" : "rgba(0, 0, 0, 0)"
            }}
            onClick={() => setActiveItem(activeItem === 'contact' ? '' : 'contact')}
            onMouseEnter={(e) => {
              if (!isActive('/contact') && activeItem !== 'contact') {
                e.currentTarget.style.backgroundColor = "rgb(235, 251, 223)";
                const p = e.currentTarget.querySelector('p');
                if (p) p.style.color = "rgb(5, 96, 50)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isActive('/contact') || activeItem === 'contact' ? "rgb(5, 96, 50)" : "rgba(0, 0, 0, 0)";
              const p = e.currentTarget.querySelector('p');
              if (p) p.style.color = isActive('/contact') || activeItem === 'contact' ? "rgb(255, 255, 255)" : "rgb(5, 96, 50)";
            }}
          >
            <p style={{
              ...textBaseStyle,
              color: isActive('/contact') || activeItem === 'contact' ? "rgb(255, 255, 255)" : "rgb(5, 96, 50)"
            }}>
              Contact Us
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;