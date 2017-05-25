
export default function jIf(expression, component){

  let context = function (){
    return (
      componentToRender
    );
  };

  let componentToRender = {};

  let expressionSatisfied = false;

  context.elsif = function elsif(expression, component){
    return checkExpression(expression, component);
  }

  context.els = function els(component){
    return checkExpression(true, component);
  }

  // context.render = function(){
  //   return (componentToRender);
  // }

  function checkExpression(expression, component){
    if(expression && !expressionSatisfied){
      expressionSatisfied = true;
      componentToRender = component;
    }
    return context;
  }

  return checkExpression(expression, component);

}



// export default function jIf(expression, component){
//
//   let context = {};
//   let componentToRender = {};
//
//   let expressionSatisfied = false;
//
//
//
//   context.then = function then(component) {
//     if(expression && !expressionSatisfied){
//       expressionSatisfied = true;
//       componentToRender = Object.assign(component, context)
//     }
//     return component;
//   }
//
//   context.elsif = function elsif(newExpression){
//     expression = newExpression;
//     return context;
//   }
//
//   context.els = function els(component){
//     if(!expressionSatisfied){
//       expressionSatisfied = true;
//       componentToRender = component;
//     }
//     return context;
//   }
//
//   context.render = function(){
//     return (componentToRender);
//   }
//
//   return context;
//
// }
