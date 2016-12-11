import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../common/services/project.service';
import { Project } from '../../common/models/project.model';

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html',
})

export class ProjectListComponent implements OnInit {

  private projects: Array<Project>;

  constructor(
      private projectService: ProjectService, 
      private router: Router) {
        projectService.projects$.subscribe(this.doThings.bind(this))
  }

  ngOnInit(){}

  doThings(projects:Array<Project>){
    this.projects = projects;
  }

  open(projectId: string){ 
    //this.selectionUpdated.emit(projectId);
    this.router.navigateByUrl(`/project/${projectId}`);
  }
}