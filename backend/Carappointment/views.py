from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Szolgaltatas,Auto,Megrendelo
from .serializer import AutoSerializer,MegreneloSerializer,SzolgaltatasSerializer


@api_view(['GET'])
def endpoints(request):
    points = {'Message': 'Teszt'}
    return Response(points)


@api_view(['GET'])
def MindenSzolgaltatas(request):
    szolgaltatasok = Szolgaltatas.objects.all()
    serialized = SzolgaltatasSerializer(szolgaltatasok, many = True)
    
    return Response(serialized.data)

@api_view(['GET'])
def SzolgaltatasByID(request,pk):
    try:
        szolgaltatas = Szolgaltatas.objects.get(id=pk)
        serialized = SzolgaltatasSerializer(szolgaltatas, many = False) 
        return Response(serialized.data)
    except Exception as e:
        return Response({'Message': str(e)})
  
      
@api_view(['GET'])
def MindenAuto(request):
    autok = Auto.objects.all()
    serialized = AutoSerializer(autok, many = True)
    
    return Response(serialized.data)

@api_view(['GET'])
def AutoByID(request,pk):
    try:
        auto = Auto.objects.get(id=pk)
        serialized = AutoSerializer(auto, many = False) 
        return Response(serialized.data)
    except Exception as e:
        return Response({'Message': str(e)})
    

@api_view(['GET'])
def MindenMegrendelo(request):
    megrendelok = Megrendelo.objects.all()
    serialized = MegreneloSerializer(megrendelok, many = True)
    
    return Response(serialized.data)

@api_view(['GET'])
def MegrendeloByID(request,pk):
    try:
        megrendelo = Auto.objects.get(id=pk)
        serialized = MegreneloSerializer(megrendelo, many = False) 
        return Response(serialized.data)
    except Exception as e:
        return Response({'Message': str(e)})


# Create your views here.