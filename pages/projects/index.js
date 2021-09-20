import DefaultLayout from '@layouts/default'
import Link from 'next/link'

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <h1>PROJECTS</h1>

      <Link href="/projects/memory">memory</Link>

      <h2>Personal projects</h2>
      <ul>
        <li><a href="https://beumsk.github.io/Memory/" target="_blank">Memory</a></li>
        <li><a href="https://beumsk.github.io/Snake/" target="_blank">Snake</a></li>
        <li><a href="https://beumsk.github.io/Minesweeper/" target="_blank">Minesweeper</a></li>
        <li><a href="https://beumsk.github.io/Whack-a-Donkey-Kong/" target="_blank">Whack a Donkey Kong</a></li>
        <li><a href="https://beumsk.github.io/Hangman/" target="_blank">Hangman</a></li>
        <li><a href="https://beumsk.github.io/Dad-Jokes/" target="_blank">Dad jokes</a></li>
        <li><a href="https://beumsk.github.io/Giphy-Search/" target="_blank">Giphy Search</a></li>
        <li><a href="https://beumsk.github.io/Tetris/" target="_blank">Tetris</a></li>
        <li><a href="https://beumsk.github.io/Simon-Game/" target="_blank">Simon Game</a></li>
        <li><a href="https://beumsk.github.io/Drum-Machine/" target="_blank">Drum Machine</a></li>
        <li><a href="https://beumsk.github.io/Clock/" target="_blank">Clock</a></li>
        <li><a href="https://beumsk.github.io/Etch-a-Sketch/" target="_blank">Etch a Sketch</a></li>
        <li><a href="https://beumsk.github.io/Calculator/" target="_blank">Calculator</a></li>
        <li><a href="https://beumsk.github.io/Higher-or-Lower/" target="_blank">Higher-or-Lower</a></li>
        <li><a href="https://beumsk.github.io/Tic-Tac-Toe/" target="_blank">Tic-Tac-Toe</a></li>
        <li><a href="https://beumsk.github.io/Sliding-Puzzle/" target="_blank">Sliding-Puzzle</a></li>
        <li><a href="https://beumsk.github.io/To-Do-List/" target="_blank">To-Do-List</a></li>
        <li><a href="https://beumsk.github.io/Pokemon/" target="_blank">Pokemon</a></li>
        <li><a href="https://beumsk.github.io/Color-Game/" target="_blank">Color-Game</a></li>
        <li><a href="https://beumsk.github.io/Brick-Breaker/" target="_blank">Brick-Breaker</a></li>
        <li><a href="https://beumsk.github.io/Connect-4/" target="_blank">Connect-4</a></li>
        <li><a href="https://beumsk.github.io/Date-Counter/" target="_blank">Date-Counter</a></li>
        <li><a href="https://beumsk.github.io/Quotes/" target="_blank">Quotes</a></li>
        <li><a href="https://beumsk.github.io/Timer/" target="_blank">Timer</a></li>
      </ul>

      <h2>Professional projects</h2>
      <ul>
        <li><a href="https://careers.kpmg.be/" target="_blank">KPMG Careers Belgium</a></li>
        <li><a href="https://www.kpmglaw.be/" target="_blank">KPMG Law</a></li>
        <li><a href="https://www.bee-paris.com/" target="_blank">Bee Paris</a></li>
      </ul>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Projects',
      description: 'Projects from RB'
    }
  }
}