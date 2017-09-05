import { EventService } from './shared/event.service';
import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";

@Injectable()
export class EventListResolver implements Resolve<any> {
    resolve() {
        return this.eventService.getEvents().map(events=>events);
    }

    constructor(private eventService:EventService) { }

    
}