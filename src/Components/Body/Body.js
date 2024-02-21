import React from "react";
import * as S from "./Body_Styled";
import QR from "../Body/images/image-qr-code.png"


export default function Main(){
    return(
        <S.Main>
            <div className="box">
            <div class="QR">
              <img src={QR} alt="QRCODE"/>
                  <h2>Improve your front-end skills by building projects</h2>
                  <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
            <p className="p">Challenge by Frontend Mentor. Coded by Eduarda Fonseca.</p>
            </div>
        </S.Main>
    );
}