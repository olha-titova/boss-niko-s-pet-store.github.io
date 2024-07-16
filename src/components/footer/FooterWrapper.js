import React from "react";
import "./FooterWrapper.css";
import Facebook from "../../images/footer-links/facebook.svg";
import linkedin from "../../images/footer-links/linkedin.svg";
import youtube from "../../images/footer-links/youtube.svg";
import instagram from "../../images/footer-links/instagram.svg";


const FooterWrapper = () => {
    return (
        <div className="FooterWrapper">
        <div class="FooterLinks">
        <p class="FooterTitle">Site name</p>
        <div class="Links">
            <a href="https://www.facebook.com/"><img src={Facebook}/></a>
            <a href="https://www.linkedin.com/"><img src={linkedin}/></a>
            <a href="https://www.youtube.com/"><img src={youtube}/></a>
            <a href="https://www.instagram.com/"><img src={instagram}/></a>
        </div>
        </div>
        <div class="Info">
        <ul class="InfoTitle">
    <li className="InfoTextItem"><a class="InfoText" href="#">Topic</a></li>
    <li className="InfoTextItem"><a class="InfoText" href="#">Page</a></li>
    <li className="InfoTextItem"><a class="InfoText" href="#">Page</a></li>
    <li className="InfoTextItem"><a class="InfoText" href="#">Page</a></li>
</ul>
<ul class="InfoTitle">
    <li className="InfoTextItem"><a class="InfoText" href="#">Topic</a></li>
    <li className="InfoTextItem"><a class="InfoText" href="#">Page</a></li>
    <li className="InfoTextItem"><a class="InfoText" href="#">Page</a></li>
    <li className="InfoTextItem"><a class="InfoText" href="#">Page</a></li>
</ul>
<ul class="InfoTitle">
    <li className="InfoTextItem"><a class="InfoText" href="#">Topic</a></li>
    <li className="InfoTextItem"><a class="InfoText" href="#">Page</a></li>
    <li className="InfoTextItem"><a class="InfoText" href="#">Page</a></li>
    <li className="InfoTextItem"><a class="InfoText" href="#">Page</a></li>
</ul>
          
        </div>
       
    </div>
    )
}

export default FooterWrapper;