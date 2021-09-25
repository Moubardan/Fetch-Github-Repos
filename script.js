let theInput = document.querySelector('.get-repos input');
let getButton = document.querySelector('.get-button');
let reposData = document.querySelector('.show-data');

getButton.onclick  = function(){

  getRepos();
}

function getRepos(){

  if(theInput.value == ''){
    reposData.innerHTML = '<span>Please Write Github Username</span>';
  }else{

    fetch(`https://api.github.com/users/${theInput.value}/repos`)
    .then(response => response.json())
    .then(data => {

      reposData.innerHTML = '';
      data.forEach(repo => {
        
       let mainDiv = document.createElement('div');
       let repoName = document.createTextNode(repo.name);
           mainDiv.appendChild(repoName);
       let theUrl = document.createElement('a');
       let theUrlText = document.createTextNode('visit');
       
           theUrl.appendChild(theUrlText);
           theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
           theUrl.setAttribute('target', '_blank');
           mainDiv.appendChild(theUrl);
           reposData.appendChild(mainDiv);
      
       let stars = document.createElement('span');
       let starsText = document.createTextNode(`Stars ${repo.stargazers_count} `);
          stars.appendChild(starsText);
          mainDiv.appendChild(stars);
          mainDiv.classList = 'repo-box';


      });

    })
      
  }

}