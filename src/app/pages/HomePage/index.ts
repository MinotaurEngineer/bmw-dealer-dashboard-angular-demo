import { Component, inject, signal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { VehicleService } from '../../services/vehicles'

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <a [routerLink]="['/vehicle/1']">Go to Vehicle #1</a>

    <div>
      @for (vehicle of vehicles(); track vehicle.id) {
        <div>{{ vehicle.name }}</div>
      } @empty {
        <p>Loading vehicles...</p>
      }
    </div>
  `
})

export class HomePage {
  private vehicleService = inject(VehicleService);

  vehicles = signal<any[]>([]);

  constructor(){
    this.vehicleService.getAll().subscribe(data => {
      this.vehicles.set(data);
    });
  }

}
