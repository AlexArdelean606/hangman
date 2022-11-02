const Head = (
  <div
    key='head'
    style={{
      border: '10px solid black', borderRadius: '100%',
      width: '50px', height: '50px',
      position: 'absolute', top: '50px', right: '-30px'
    }} />
)

const Torso = (
  <div
    key='torso'
    style={{
      backgroundColor: 'black',
      width: '10px', height: '100px',
      position: 'absolute', top: '120px', right: '0'
    }} />
)

const RightArm = (
  <div
    key='rightarm'
    style={{
      backgroundColor: 'black',
      width: '100px', height: '10px',
      position: 'absolute', top: '150px', right: '-95px',
      rotate: '-45deg',
      transformOrigin: 'left bottom',
      borderRadius: '30%'

    }} />
)

const RightLeg = (
  <div
    key='rightleg'
    style={{
      backgroundColor: 'black',
      width: '100px', height: '10px',
      position: 'absolute', top: '210px', right: '-90px',
      rotate: '45deg',
      transformOrigin: 'left bottom',
      borderRadius: '30%'
    }} />
)

const LeftArm = (
  <div
    key='leftarm'
    style={{
      backgroundColor: 'black',
      width: '100px', height: '10px',
      position: 'absolute', top: '150px', right: '5px',
      rotate: '45deg',
      transformOrigin: 'right bottom',
      borderRadius: '30%'
    }} />
)

const LeftLeg = (
  <div
    key='leftleg'
    style={{
      backgroundColor: 'black',
      width: '100px', height: '10px',
      position: 'absolute', top: '210px', right: '0px',
      rotate: '-45deg',
      transformOrigin: 'right bottom',
      borderRadius: '30%'
    }} />
)

export const BodyParts = [Head, Torso, RightArm, LeftArm, RightLeg, LeftLeg]

type HangmanDrawingProps = {
  numberGuesses: number
}

export function HangmanDrawing({ numberGuesses }: HangmanDrawingProps) {

  return (
    <div style={{ position: 'relative' }}>

      {BodyParts.slice(0, numberGuesses)}

      {/* DROP */}
      <div style={{ backgroundColor: 'black', height: '50px', width: '10px', position: 'absolute', top: '0', right: '0' }} />

      {/* BAR */}
      <div style={{ backgroundColor: 'black', height: '10px', width: '200px', marginLeft: '120px' }} />

      {/* POLE */}
      <div style={{ backgroundColor: 'black', height: '400px', width: '10px', marginLeft: '120px' }} />

      {/* BASE  */}
      <div style={{ backgroundColor: 'black', height: '10px', width: '250px' }} />

    </div>
  )
}