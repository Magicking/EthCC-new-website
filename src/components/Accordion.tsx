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
        flexDirection: `column`,
        justifyContent: `center`,
        borderBottom: `1px solid #d3d3d3`,
        p: `1rem`,
        mt: `10px`,
      }}
    >
      <Flex
        sx={{
          flexDirection: `row`,
          justifyContent: `space-between`,
          alignItems: `center`,
          width: `100%`,
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Box>{title}</Box>
        <Close
          sx={{
            transform: `rotate(${isOpen ? `0deg` : `45deg`})`,
            transition: `all .3s ease`,
          }}
        />
      </Flex>
      {isOpen && <Flex>{content}</Flex>}
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
    }}
  >
    {content.map((el) => (
      <AccordionElement {...el} />
    ))}
  </Flex>
);
