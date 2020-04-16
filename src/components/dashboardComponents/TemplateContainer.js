import React from 'react';
import {Flex, Heading, Button} from '@chakra-ui/core';
import ChooseDateForm from './ChooseDateForm.js';
import CreateTemplateForm from './CreateTemplateForm'
import NewEventForm from '../mobile/NewEventForm';








const TemplateContainer = (props) => {
    const {
    setSelected,
    selected,
    templateFormOpen,
    setTemplateFormOpen,
    formOpen,
    setFormOpen,
    setTemplateList,
    templateList,
    currentUser} = props;



  return (
          <Flex
            className="templateArea"
            direction="column"
            align="center"
            justify="center"
            w="100%"
            p={8}
            mb={4}
            backgroundColor="white"
            borderRadius="10px"
          >
            <Heading as="h2">Events</Heading>
            {templateList &&
              templateList.map(t => (
                <ChooseDateForm
                  key={t._id}
                  id={t._id}
                  starttime={t.starttime}
                  endtime={t.endtime}
                  summary={t.summary}
                  description={t.description}
                  setSelected={setSelected}
                  selected={selected}
                  templateFormOpen={templateFormOpen}
                  setTemplateFormOpen={setTemplateFormOpen}
                  setTemplateList={setTemplateList}
                  templateList={templateList}
                />
                
              ))}
            <Button
              id="createEventChain"
              my={4}
              variantColor="teal"
              onClick={() => setFormOpen(!formOpen)}
            >
              Create Event Chain
            </Button>
            {formOpen && <CreateTemplateForm setFormOpen={setFormOpen} setTemplateList={setTemplateList} currentUser={currentUser} formOpen={formOpen}/>}
          </Flex>
  );
};

export default TemplateContainer;
