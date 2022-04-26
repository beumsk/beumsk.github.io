import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiBootstrap,
  SiSass,
  SiAngular,
  SiReact,
  SiCsharp,
  SiUmbraco,
  SiRedux,
  SiMaterialui,
  SiChakraui,
} from 'react-icons/si';
import PropTypes from 'prop-types';

export default function Tech({ name, color }) {
  return (
    <>
      {name === 'html' && <SiHtml5 color={color ? '#E44D26' : ''} title="HTML" aria-labelledby="HTML" />}
      {name === 'css' && <SiCss3 color={color ? '#1572B6' : ''} title="CSS" aria-labelledby="CSS" />}
      {name === 'javascript' && (
        <SiJavascript color={color ? '#F0DB4F' : ''} title="JavaScript" aria-labelledby="JavaScript" />
      )}
      {name === 'typescript' && (
        <SiTypescript color={color ? '#007ACC' : ''} title="Typescript" aria-labelledby="Typescript" />
      )}
      {name === 'jquery' && <SiJquery color={color ? '#0868AC' : ''} title="jQuery" aria-labelledby="jQuery" />}
      {name === 'bootstrap' && (
        <SiBootstrap color={color ? '#5B4282' : ''} title="Bootstrap" aria-labelledby="Bootstrap" />
      )}
      {name === 'sass' && <SiSass color={color ? '#CF649A' : ''} title="Sass" aria-labelledby="Sass" />}
      {name === 'angular' && <SiAngular color={color ? '#A6120D' : ''} title="Angular" aria-labelledby="Angular" />}
      {name === 'react' && <SiReact color={color ? '#61DBFB' : ''} title="React" aria-labelledby="React" />}
      {name === 'redux' && <SiRedux color={color ? '#764ABC' : ''} title="Redux" aria-labelledby="Redux" />}
      {name === 'material ui' && (
        <SiMaterialui color={color ? '#007fff' : ''} title="Material UI" aria-labelledby="Material UI" />
      )}
      {name === 'chakra ui' && (
        <SiChakraui color={color ? '#3cc7bd' : ''} title="Chakra UI" aria-labelledby="Chakra UI" />
      )}
      {name === 'c#' && <SiCsharp color={color ? '#390092' : ''} title="C#" aria-labelledby="C#" />}
      {name === 'umbraco' && <SiUmbraco color={color ? '#3544b1' : ''} title="Umbraco" aria-labelledby="Umbraco" />}
    </>
  );
}

Tech.propTypes = {
  name: PropTypes.string,
  color: PropTypes.bool,
};
