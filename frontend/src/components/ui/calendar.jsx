import * as React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { cn } from "@/lib/utils";

// DayPicker 10 supports React 19 and date-fns 4. Keep its current markup and
// styles together instead of applying the retired v8 class/component names.
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-background text-foreground rounded-md", className)}
      classNames={{ ...getDefaultClassNames(), ...classNames }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";
export { Calendar };
