/** @jsx React.DOM */
app.Views.SudokuBoard = React.createClass({displayName: 'SudokuBoard',

  startGame: function() {
    console.log("starting game")
  },

  componentDidMount: function() {

  },

  render: function() {
    // var numbers = this.state.forEach(function(number){
    //   return <SudokuCell number={number} />
    // })
    return (
      React.DOM.div(null, 
        app.Views.InputBox({startGame: this.startGame})
      )
    )
  }
})

React.renderComponent(app.Views.SudokuBoard(null), document.getElementById('sudoku'))