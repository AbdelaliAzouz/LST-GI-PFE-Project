/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Particles from 'react-particles-js';

  <Particles
  params={{
      "particles": {
          "number": {
              "value": 50
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  }} 
  />

  const styles = css`
  width: 10%;
  min-height: 50vh;
  display: flex;`

export default Particles;