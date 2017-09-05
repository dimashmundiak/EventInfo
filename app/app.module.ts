import { CollaplibleWellComponent } from './common/collapsible-well.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes';
import { ToastrService } from './common/toastr.service';
import { NavbarComponent } from './nav/navbar.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CreateEventComponent, EventDetailsComponent, EventListResolver, EventListComponent, EventThumbnailComponent, EventRouteActivator, EventService } from './events/index'
import { EventsAppComponent } from './event-app.component';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent, CollaplibleWellComponent, EventListComponent, SessionListComponent, CreateSessionComponent, EventThumbnailComponent, NavbarComponent, EventDetailsComponent, CreateEventComponent, Error404Component],
    providers: [EventService, AuthService, ToastrService, EventListResolver, EventRouteActivator, {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        } ]
    ,
    bootstrap: [EventsAppComponent]
})

export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if(component.isDirty){
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}