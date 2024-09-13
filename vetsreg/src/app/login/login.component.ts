import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../user.service';

interface Todos {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  httpClient = inject(HttpClient);
  user = inject(UserService);
  myTodos: Todos[] = [];

  ngOnInit() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe({
        next: (response) => {
          this.myTodos = response as [];
          console.log(this.myTodos[1]);
          if (this.myTodos[1].completed === false) {
            this.user.onLogIn(true, 'regular-user');
          }
        },
      });
  }
}
