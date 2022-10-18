.my-work {
background-color: darken($color: $clr-light, $amount: 1);
color: $clr-dark;
text-align: center;
margin-top: 10px;

.section\_\_subtitle--work {
color: $clr-accent;
font-weight: $fw-bold;
padding: 15px;
}

/_Project Card_/
.portifolio-wrapper {
display: grid;
width: 70%;
margin: 1em auto;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
grid-gap: 20px;

    .project-card {
      background-color: $clr-accent;
      min-height: 425px;

      .project-item {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 2em;

        .project-item-header {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-top: 2em;

          .project-item-icons {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .folder-img {
              color: $text-faded;
            }

            .git-link {
              display: flex;
              column-gap: 1em;

              .project-link-icons {
                color: #212529;
                font-size: 35px;
                margin: 0 1rem;
                transition: transform 0.5s;

                &:hover {
                  transform: scale(1.2);
                  color: $text-faded;
                }
              }
            }
          }

        }

        .project-item-footer {
          ul {
            padding-bottom: 2em;

            li {
              list-style: none;
              display: inline-flex;
              font-weight: bold;
              color: $text-faded;

            }
          }
        }
      }

      .project-item-content {}

      .project-item-footer {}
    }

}

}
