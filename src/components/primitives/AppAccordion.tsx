"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

/**
 * AppAccordion — A vertically stacked set of interactive headings that each reveal a section of content.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppAccordion(props: React.ComponentProps<typeof Accordion>) {
  return <Accordion {...props} />
}

/**
 * AppAccordionItem — The item component for AppAccordion.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppAccordionItem(props: React.ComponentProps<typeof AccordionItem>) {
  return <AccordionItem {...props} />
}

/**
 * AppAccordionTrigger — The trigger component for AppAccordion.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppAccordionTrigger(props: React.ComponentProps<typeof AccordionTrigger>) {
  return <AccordionTrigger {...props} />
}

/**
 * AppAccordionContent — The content component for AppAccordion.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppAccordionContent(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} />
}

export { AppAccordion, AppAccordionItem, AppAccordionTrigger, AppAccordionContent }
