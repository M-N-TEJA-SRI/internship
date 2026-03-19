import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image

model = models.resnet50(pretrained=True)
model.eval()

transform = transforms.Compose([
    transforms.Resize((224,224)),
    transforms.ToTensor()
])

def extract_features(image):
    img = Image.open(image)
    img = transform(img).unsqueeze(0)
    with torch.no_grad():
        features = model(img)
    return features.numpy()
