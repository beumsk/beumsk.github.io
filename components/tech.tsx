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
  SiMui,
  SiChakraui,
  SiStyledcomponents,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiJest,
  SiMdx,
  SiI18Next,
  SiNextdotjs,
} from 'react-icons/si';

type TechProps = {
  name: string;
  color?: boolean;
};

export default function Tech({ name, color }: TechProps) {
  return (
    <>
      {name === 'html' ? <SiHtml5 color={color ? '#E44D26' : ''} title="HTML" aria-labelledby="HTML" /> : null}
      {name === 'css' ? <SiCss3 color={color ? '#1572B6' : ''} title="CSS" aria-labelledby="CSS" /> : null}
      {name === 'javascript' ? (
        <SiJavascript color={color ? '#F0DB4F' : ''} title="JavaScript" aria-labelledby="JavaScript" />
      ) : null}
      {name === 'typescript' ? (
        <SiTypescript color={color ? '#007ACC' : ''} title="Typescript" aria-labelledby="Typescript" />
      ) : null}
      {name === 'jquery' ? <SiJquery color={color ? '#0868AC' : ''} title="jQuery" aria-labelledby="jQuery" /> : null}
      {name === 'bootstrap' ? (
        <SiBootstrap color={color ? '#5B4282' : ''} title="Bootstrap" aria-labelledby="Bootstrap" />
      ) : null}
      {name === 'sass' ? <SiSass color={color ? '#CF649A' : ''} title="Sass" aria-labelledby="Sass" /> : null}
      {name === 'angular' ? (
        <SiAngular color={color ? '#A6120D' : ''} title="Angular" aria-labelledby="Angular" />
      ) : null}
      {name === 'react' ? <SiReact color={color ? '#61DBFB' : ''} title="React" aria-labelledby="React" /> : null}
      {name === 'next.js' ? (
        <SiNextdotjs color={color ? '#000000' : ''} title="Next.js" aria-labelledby="Next.js" />
      ) : null}
      {name === 'redux' ? <SiRedux color={color ? '#764ABC' : ''} title="Redux" aria-labelledby="Redux" /> : null}
      {name === 'material-ui' ? (
        <SiMui color={color ? '#007fff' : ''} title="Material UI" aria-labelledby="Material UI" />
      ) : null}
      {name === 'chakra-ui' ? (
        <SiChakraui color={color ? '#3cc7bd' : ''} title="Chakra UI" aria-labelledby="Chakra UI" />
      ) : null}
      {name === 'styled-components' ? (
        <SiStyledcomponents title="Styled components" aria-labelledby="Styled components" />
      ) : null}
      {name === 'jest' ? <SiJest color={color ? '#99415B' : ''} title="Jest" aria-labelledby="Jest" /> : null}
      {name === 'mdx' ? <SiMdx color={color ? '#1b1f24' : ''} title="MDX" aria-labelledby="MDX" /> : null}
      {name === 'i18n' ? <SiI18Next color={color ? '#009788' : ''} title="I18N" aria-labelledby="I18N" /> : null}
      {name === 'node.js' ? (
        <SiNodedotjs color={color ? '#689F63' : ''} title="Node.js" aria-labelledby="Node.js" />
      ) : null}
      {name === 'firebase' ? (
        <SiFirebase color={color ? '#FFA50E' : ''} title="Firebase" aria-labelledby="Firebase" />
      ) : null}
      {name === 'mongo-db' ? (
        <SiMongodb color={color ? '#00684A' : ''} title="Mongo DB" aria-labelledby="Mongo DB" />
      ) : null}
      {name === 'c#' ? <SiCsharp color={color ? '#390092' : ''} title="C#" aria-labelledby="C#" /> : null}
      {name === 'umbraco' ? (
        <SiUmbraco color={color ? '#3544b1' : ''} title="Umbraco" aria-labelledby="Umbraco" />
      ) : null}
    </>
  );
}
