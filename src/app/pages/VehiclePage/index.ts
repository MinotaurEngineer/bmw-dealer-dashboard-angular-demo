import { Component, inject, signal } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../services/vehicles';

@Component({
  standalone: true,
  selector: 'app-vehicle',
  imports: [RouterLink],
  template: `
    <a [routerLink]="['/']">Go Home</a>

    @if (vehicle()) {
      <h1>{{ vehicle().make }} {{ vehicle().model }}</h1>
      <p>Name: {{ vehicle().name }}</p>
    } @else {
      <p>Loading vehicle...</p>
    }
  `
})

export class VehiclePage {
  private route = inject(ActivatedRoute);
  private service = inject(VehicleService);

  vehicle = signal<any>(null);

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.getById(id).subscribe(data => {
        this.vehicle.set(data);
      });
    }
  }
}
