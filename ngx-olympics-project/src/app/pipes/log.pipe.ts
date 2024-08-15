import { Pipe, PipeTransform } from '@angular/core';
/**
 * Log pipe is used for debugging purposes allows quickly log to the console a template value.
 *
 * @example
 * <!-- Log value to a console. -->
 * <div>
 *  {{ foo.value | log }}
 * </div>
 */
@Pipe({
  name: 'log'
})
export class LogPipe implements PipeTransform {
  transform(value: unknown): void {
    console.log(value);
  }
}