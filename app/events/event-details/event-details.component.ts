import { IEvent, ISession } from './../shared/event.model';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
        .container {padding-left: 20px; padding-rigth: 20px;}
        .event-image {height: 100px;}
        a {cursor: pointer;}
    `]
})

export class EventDetailsComponent implements OnInit {

    event: IEvent;
    addMore: boolean;

    constructor(
        private eventService: EventService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession() {
        this.addMore = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMore = false;
    }

    cancelAddSession() {
        this.addMore = false;
    }

}