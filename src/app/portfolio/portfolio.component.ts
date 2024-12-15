import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
    id: 0,
    name: "Embedded Systems",
    summary: "Introductory Project: Mictrontroller-Based System Written in C/C++",
    projectLink: "https://cours.polymtl.ca/inf1900/",
    picture: "../../assets/project1.jpg",
    tags: [Tag.CANDCPLUSPLUS]
    },
    {
      id: 1,
      name: "Web Development",
      summary: "Team Project: Multiplayer Quiz Game with Live Chat Using Angular",
      projectLink: "https://gitlab.com/polytechnique-montr-al/log2990/20233/equipe-101/LOG2990-101",
      picture: "../../assets/project2.png",
      tags: [Tag.ANGULAR, Tag.NODEJS, Tag.MONGODB]
    },
    {
      id: 2,
      name: "AgileX Robot",
      summary: "Team Project: Rust-Written Robotic System with Web Interface",
      projectLink: "https://gitlab.com/polytechnique-montr-al/inf3995/20243/equipe-108/limocrab",
      picture: "../../assets/project3.png",
      tags: [Tag.RUST, Tag.DOCKER]
    },
    {
      id: 3,
      name: "Exocet",
      summary: "Technical Society: Electronics and Embedded System Aoard a Small Boat",
      projectLink: "https://github.com/Exocet-Polytechnique",
      picture: "../../assets/exocet.jpg",
      tags: [Tag.RUST, Tag.KICAD]
      }
  ]

  constructor(private titleService: Title) {
    this.titleService.setTitle('Portfolio');
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
