import React, { ReactNode, useState } from 'react';
import { Flex, Close, Box } from '@components';

type AccordionContent = {
  title: ReactNode;
  content: ReactNode;
};

const AccordionElement = ({ title, content }: AccordionContent) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Flex
      sx={{
        ':first-of-type': {
          mt: `0`,
        },
        ':last-of-type': {
          borderBottom: `none`,
          pb: `0`,
        },
        flexDirection: `column`,
        justifyContent: `center`,
        borderBottom: `1px solid #d3d3d3`,
        p: `1rem`,
        mt: `20px`,
      }}
    >
      <Flex
        sx={{
          flexDirection: `row`,
          justifyContent: `space-between`,
          alignItems: `center`,
          width: `100%`,
          cursor: `pointer`,
          transition: `all .3s ease`,
          ':hover': {
            transform: `scale(1.01)`,
          },
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Box>{title}</Box>
        <Close
          sx={{
            transform: `rotate(${isOpen ? `0deg` : `45deg`})`,
            transition: `all .3s ease`,
            ml: `20px`,
          }}
        />
      </Flex>
      <Flex
        sx={{
          mt: `20px`,
          maxHeight: isOpen ? `1000px` : `0`,
          overflow: `hidden`,
          opacity: isOpen ? `1` : `0`,
          transition: `all .5s`,
        }}
      >
        {content}
      </Flex>
    </Flex>
  );
};

export const Accordion = ({ content }: { content: AccordionContent[] }) => (
  <Flex
    sx={{
      backgroundColor: `#fff`,
      borderRadius: `5px`,
      flexDirection: `column`,
      p: `20px`,
      border: `2px solid`,
      borderColor: `primary`,
    }}
  >
    {content.map((el, idx) => (
      <AccordionElement {...el} key={`${idx}-accordion`} />
    ))}
  </Flex>
);
