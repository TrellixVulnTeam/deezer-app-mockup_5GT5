import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/interfaces/user-profile';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  //TODO:-> fetch user profile from a service
  user: UserProfile = {
    id: 1,
    name: 'Norman Munge',
    image: '',
    email: 'normanmunge@gmail.com',
  };

  constructor() {}

  ngOnInit(): void {}
}
