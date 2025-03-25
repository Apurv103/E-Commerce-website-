"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }


// "use client"

// import * as React from "react"
// import * as LabelPrimitive from "@radix-ui/react-label"
// import { cn } from "@/lib/utils"

// // Forward ref and include htmlFor support
// const Label = React.forwardRef<
//   HTMLLabelElement,
//   React.ComponentProps<typeof LabelPrimitive.Root> & { htmlFor?: string }
// >(({ className, htmlFor, ...props }, ref) => {
//   return (
//     <LabelPrimitive.Root
//       ref={ref}
//       data-slot="label"
//       className={cn(
//         "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
//         className
//       )}
//       {...props}
//     >
//       {/* Pass the htmlFor directly to the label element */}
//       <label htmlFor={htmlFor}>{props.children}</label>
//     </LabelPrimitive.Root>
//   )
// })

// Label.displayName = "Label"

// export { Label }

