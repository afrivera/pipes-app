import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'majuscule'
})
export class MajusculePipe implements PipeTransform {

    transform(value: string, isMajus: boolean = true ): string {
        // if( isMajus ) {
        //     return value.toLowerCase();
        // }
        // return value.toUpperCase();
        return ( isMajus ) ? value.toUpperCase() : value.toLowerCase()
    }
}