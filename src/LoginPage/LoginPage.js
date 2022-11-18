import { Link } from "react-router-dom"
import "./LoginPage1.css"
function LoginPage() {
  return (
    <>
      <div className="flexbox">
        <div className="left-right">
          <div className="leftarea">
            <div className="fbcontainer">
              <img
                className="fb_logo"
                src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                alt="Facebook"
              />
            </div>
            <h2 className="fb-text">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="rightarea">
            <div className="form-cbtext">
              <div className="form_en">
                <div className="email-password">
                  <div className="email">
                    <input className="inputtext" type="text" id="email" name="email" placeholder="Email address or phone number" autoFocus />
                  </div>
                  <div className="password">
                    <input className="inputpass" type="password" id="password" name="password" placeholder="Password" />
                  </div>
                </div>

                <div className="login">
                  <Link to="/HeaderArea">
                    <button className="btn">
                      Log in
                    </button>
                  </Link>
                </div>

                <div className="forget">
                  <a className="forgot_button" href="./">Forgotten Password?</a>
                </div>
                <div className="_8icz"></div>
                <div className="btns">
                  <button className="new_account_button">
                    Create New Account
                  </button>
                </div>
              </div>
              <div className="cbtext">
                <a href="./" className="register"
                >Create a Page </a>
                for a celebrity, brand or business.
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="foo">
        <div className="_95ke _8opy">
          <div id="pageFooter">
            <ul className="listoflanguage">
              <li>English (UK)</li>
              <li>தமிழ்</li>
              <li>తెలుగు</li>
              <li>Kannada</li>
              <li>Urdu</li>
              <li>हिन्दी</li>
              <li>മലയാളം</li>
              <li>සිංහල</li>
              <li>ਪੰਜਾਬੀ</li>
              <li>Bengali</li>
              <li>ગુજરાતી</li>
            </ul>
            <div id="contentCurve"></div>
            <div id="pageFooterChildren">
              <ul className="listofitems">
                <li>Sign Up</li>
                <li>Log in</li>
                <li>Messenger</li>
                <li>Facebook Lite</li>
                <li>Watch</li>
                <li>Places</li>
                <li>Games</li>
                <li>Marketplace</li>
                <li>Meta Pay</li>
                <li>Oculus</li>
                <li>Portal</li>
                <li>Instagram</li>
                <li>Bulletin</li>
                <li>Local</li>
                <li>Fundraisers</li>

              </ul>
              <ul className="listofitems">
                <li>Services</li>
                <li>Voting Information Centre</li>
                <li>Groups</li>
                <li>About</li>
                <li>Create ad</li>
                <li>Create Page</li>
                <li>Developers</li>
                <li>Careers</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Adchoices</li>
                <li>Terms</li>
                <li>Help</li>
              </ul>
              <ul className="_tio">
                <li>Contact uploading and non-users</li>
              </ul>
            </div>
            <div className="mvl copyright"><div><span> Meta © 2022</span></div></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default LoginPage
