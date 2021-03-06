import "../Sass/Home.scss";
import "../Sass/App.scss";

function Home() {
  return (
    <div className="Home">
      <header>
        <svg width="148" height="25" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path
              d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z"
              fill="#242A45"
              fill-rule="nonzero"
            />
            <g>
              <circle fill="#5267DF" cx="12.5" cy="12.5" r="12.5" />
              <path
                d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z"
                fill="#FFF"
              />
            </g>
          </g>
        </svg>
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#Features">Features</a>
            </li>
            <li>
              <a href="#Extension">Extension</a>
            </li>
            <li>
              <a href="#FAQ">FAQ</a>
            </li>
          </ul>
          {/* <button className="btn btn--softRed btn--softRed--capitalize">
            login
          </button> */}
        </nav>
      </header>
      <section>
        <div className="about">
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="about__cta">
            <button className="btn btn--softBlue ">Get it on Chrome</button>
            <button className="btn">Get it on Firefox</button>
          </div>
        </div>
        <div className="bookmarkBanner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="657"
            height="466"
            viewBox="0 0 657 466"
          >
            <defs>
              <filter
                id="a"
                width="118%"
                height="126.9%"
                x="-9%"
                y="-5.7%"
                filterUnits="objectBoundingBox"
              >
                <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                  stdDeviation="2"
                />
                <feColorMatrix
                  in="shadowBlurOuter1"
                  result="shadowMatrixOuter1"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                />
                <feMerge>
                  <feMergeNode in="shadowMatrixOuter1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <rect id="c" width="578" height="385" rx="26" />
              <filter
                id="b"
                width="126%"
                height="139%"
                x="-13%"
                y="-11.7%"
                filterUnits="objectBoundingBox"
              >
                <feOffset
                  dy="30"
                  in="SourceAlpha"
                  result="shadowOffsetOuter1"
                />
                <feGaussianBlur
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                  stdDeviation="20"
                />
                <feColorMatrix
                  in="shadowBlurOuter1"
                  values="0 0 0 0 0.18243335 0 0 0 0 0.230632694 0 0 0 0 0.506057518 0 0 0 0.200120192 0"
                />
              </filter>
              <linearGradient
                id="d"
                x1="99.013%"
                x2="2.544%"
                y1="71.675%"
                y2="29.014%"
              >
                <stop offset="0%" stop-color="#151515" />
                <stop offset="100%" stop-color="#3D3D3D" />
              </linearGradient>
              <rect id="e" width="536" height="346" y="3" rx="8" />
            </defs>
            <g
              fill="none"
              fill-rule="evenodd"
              filter="url(#a)"
              transform="translate(39 9)"
            >
              <g transform="translate(.5 .5)">
                <g fill-rule="nonzero">
                  <use fill="#000" filter="url(#b)" xlinkHref="#c" />
                  <use fill="#777" xlinkHref="#c" />
                </g>
                <rect
                  width="574.23"
                  height="381.865"
                  x="2"
                  y="2"
                  fill="url(#d)"
                  fill-rule="nonzero"
                  rx="25"
                />
                <g transform="translate(21.03 16.303)">
                  <rect
                    width="471.463"
                    height="353.756"
                    x="33"
                    fill="#2A2A2A"
                    fill-rule="nonzero"
                    opacity=".1"
                    rx="5"
                  />
                  <mask id="f" fill="#fff">
                    <use xlinkHref="#e" />
                  </mask>
                  <use fill="#E8EAF6" fill-rule="nonzero" xlinkHref="#e" />
                  <g mask="url(#f)">
                    <path fill="#5267DF" d="M-3.53 3.197h547v59h-547z" />
                    <g transform="translate(22.47 17.197)" fill="#FFF">
                      <circle cx="16" cy="16" r="16" opacity=".245" />
                      <circle cx="477" cy="16" r="16" opacity=".104" />
                      <g transform="translate(47 6)">
                        <rect width="120" height="6" opacity=".75" rx="3" />
                        <rect
                          width="64"
                          height="6"
                          y="14"
                          opacity=".25"
                          rx="3"
                        />
                      </g>
                    </g>
                  </g>
                  <g mask="url(#f)">
                    <g transform="translate(57 96)">
                      <rect width="261" height="316" fill="#FFF" rx="8" />
                      <rect
                        width="128"
                        height="316"
                        x="295"
                        fill="#FFF"
                        rx="8"
                      />
                      <rect
                        width="120"
                        height="6"
                        x="78.47"
                        y="38.197"
                        fill="#242A45"
                        opacity=".5"
                        rx="3"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g transform="translate(110 135)">
                <circle cx="16" cy="26" r="16" fill="#F98E5D" />
                <rect
                  width="88"
                  height="6"
                  x="284"
                  fill="#242A45"
                  opacity=".25"
                  rx="3"
                />
                <rect
                  width="88"
                  height="6"
                  x="284"
                  y="20"
                  fill="#242A45"
                  opacity=".25"
                  rx="3"
                />
                <rect
                  width="88"
                  height="6"
                  x="284"
                  y="40"
                  fill="#242A45"
                  opacity=".25"
                  rx="3"
                />
                <rect
                  width="88"
                  height="6"
                  x="284"
                  y="60"
                  fill="#242A45"
                  opacity=".25"
                  rx="3"
                />
                <rect
                  width="88"
                  height="6"
                  x="284"
                  y="94"
                  fill="#242A45"
                  opacity=".25"
                  rx="3"
                />
                <rect
                  width="88"
                  height="6"
                  x="284"
                  y="114"
                  fill="#242A45"
                  opacity=".25"
                  rx="3"
                />
                <rect
                  width="88"
                  height="6"
                  x="284"
                  y="134"
                  fill="#242A45"
                  opacity=".25"
                  rx="3"
                />
                <rect
                  width="64"
                  height="6"
                  x="47"
                  y="30"
                  fill="#242A45"
                  opacity=".25"
                  rx="3"
                />
              </g>
              <g transform="translate(110 201)">
                <circle cx="16" cy="16" r="16" fill="#6AC6D6" />
                <rect
                  width="120"
                  height="6"
                  x="47"
                  y="6"
                  fill="#242A45"
                  opacity=".5"
                  rx="3"
                />
                <rect
                  width="64"
                  height="6"
                  x="47"
                  y="20"
                  fill="#242A45"
                  opacity=".25"
                  rx="3"
                />
              </g>
              <g transform="translate(110 257)">
                <circle cx="16" cy="16" r="16" fill="#A47ED4" />
                <rect
                  width="120"
                  height="6"
                  x="47"
                  y="6"
                  fill="#242A45"
                  opacity=".5"
                  rx="3"
                />
                <rect
                  width="64"
                  height="6"
                  x="47"
                  y="20"
                  fill="#242A45"
                  opacity=".25"
                  rx="3"
                />
              </g>
              <g transform="translate(110 313)">
                <circle cx="16" cy="16" r="16" fill="#EC7878" />
                <rect
                  width="120"
                  height="6"
                  x="47"
                  y="6"
                  fill="#242A45"
                  opacity=".5"
                  rx="3"
                />
                <rect
                  width="64"
                  height="6"
                  x="47"
                  y="20"
                  fill="#242A45"
                  opacity=".25"
                  rx="3"
                />
              </g>
            </g>
          </svg>
          <div className="rounded"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
