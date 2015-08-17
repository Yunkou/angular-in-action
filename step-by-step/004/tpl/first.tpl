<div class="col l4 offset-l4">
    <div>
        <input type="text"  class="validate" id="greeting" 
            ng-model="first.greeting.message">
    </div>
    
    <blockquote>
        {{first.greeting.message}}  world !~
    </blockquote>

    <button class="btn waves-effect waves-light" 
            ui-sref="second" type="button">Go to second</button>
</div>