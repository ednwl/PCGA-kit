"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

function AppAccordion(props: React.ComponentProps<typeof Accordion>) {
  return <Accordion {...props} />
}

function AppAccordionItem(props: React.ComponentProps<typeof AccordionItem>) {
  return <AccordionItem {...props} />
}

function AppAccordionTrigger(props: React.ComponentProps<typeof AccordionTrigger>) {
  return <AccordionTrigger {...props} />
}

function AppAccordionContent(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} />
}

export { AppAccordion, AppAccordionItem, AppAccordionTrigger, AppAccordionContent }
