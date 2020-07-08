<style lang='scss'>
    @import '../style/variables.scss';

    #decorative-angle-left {
      display: none; 
      pointer-events: none;
    
      @media #{$notMobile} {
        display: block;
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        opacity: 1;
      }
    }

    #redline {
        fill: $red;
    }
</style>

<svg id='decorative-angle-left' version="1.1" 
    viewBox="0 0 119 500" xmlns="http://www.w3.org/2000/svg" 
    xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" preserveAspectRatio='none'>
        <filter
        style="color-interpolation-filters:sRGB"
        id="filter1024"
        x="0"
        y="0">
        <feFlood
            flood-opacity="0.498039"
            flood-color="rgb(0,0,0)"
            result="flood" />
        <feComposite
            in="flood"
            in2="SourceGraphic"
            operator="in"
            result="composite1"/>
        <feGaussianBlur
            in="composite1"
            stdDeviation="2"
            result="blur"/>
        <feOffset
            dx="1.1"
            dy="0"
            result="offset"/>
        <feComposite
            in="SourceGraphic"
            in2="offset"
            operator="over"
            result="composite2"/>
        </filter>
    <g
        transform="translate(0,203)"
        style="display:inline">
        <g
            style="filter:url(#filter1024)"
            transform="translate(6.1699857,-262.90504)">
            <path id='redline'
            d="M 5,58.099995 H 109.01905 L -6.4439273,524.58749 1.8250001,243.55417 Z" />
        </g>
        <path
            d="M -10.57445,-213.74498 119.34262,-227.96372 61.846874,4.3010952 -6.7418857,26.00338 Z"
         style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.26499999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <path
         d="M -9.5454621,-98.524419 -5.0553341,36.340029 0.12229573,255.81567 62.194998,3.0223225 Z"
         style="opacity:1;fill:#d1bca6;fill-opacity:1;stroke:none;stroke-width:0.26499999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        </g>
    </svg>