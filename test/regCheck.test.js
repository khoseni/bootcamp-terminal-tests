import assert from "assert";
import regCheck from "../regCheck.js";

describe('regCheck', function(){

     it('Is from Gauteng? it should return true regCheck',function(){
      assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
     });

     it('Is from Gauteng? it should return false regCheck',function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
      });

      it('Is from Limpopo? it should return true regCheck',function(){
        assert.equal(regCheck('5566 L', 'L'), true);
      });

      it('Is from Limpopo? it should return false regCheck',function(){
             assert.equal(regCheck('5566 L', 'M'), false);
      });

      it('Is from EC? it should return true regCheck',function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
      });

      it('Is from EC? it should return false regCheck',function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
      });




  










assert.equal(regCheck('FGT 123 MP', 'MP'), true);
assert.equal(regCheck('FGT 123 MM', 'MP'), false);


});